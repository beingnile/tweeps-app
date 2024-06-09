#!/usr/bin/env python3
"""Resizes images"""
from PIL import Image, ImageDraw, ImageOps
from sys import argv


def resize_with_padding(image_path, output_path, target_size):
    """
    Resize an image to fit with target_sie while maintaining aspect ratio,
    then add padding to make it exactly target_size.

    Args:
        image_path (str): Path to input image.
        output_path (str): Path to save output image.
        target_size (tuple): (Width, height) for target size.
    """
    with Image.open(image_path) as img:
        target_ratio = target_size[0] / target_size[1]
        img_ratio = img.width / img.height

        if img_ratio > target_ratio:
            new_width = target_size[0]
            new_height = round(target_size[0] / img_ratio)
        else:
            new_height = target_size[1]
            new_width = round(target_size[1] * img_ratio)

        img = img.resize((new_width, new_height), Image.LANCZOS)
        mask = Image.new("L", (new_width, new_height), 0)
        draw = ImageDraw.Draw(mask)
        draw.rounded_rectangle([0, 0, new_width, new_height], radius=100, fill=255)

        img.putalpha(mask)

        new_img = Image.new("RGB", target_size, (255, 255, 255))
        paste_position = ((target_size[0] - new_width) // 2,
                          (target_size[1] - new_height) // 2)
        new_img.paste(img, paste_position, img)

        new_img.save(output_path)


if __name__ == '__main__':
    if len(argv) != 5:
        print("Usage: img_resizer <input> <output> <width> <height>")
        exit(1)

    input_path = f"/mnt/c/Users/okomo/Documents/Tweeps static/{argv[1]}"
    output_path = f"/home/beingnile/projects/tweeps-app/public/images/{argv[2]}"
    width = int(argv[3])
    height = int(argv[4])
    target_size = width, height

    resize_with_padding(input_path, output_path, target_size)
