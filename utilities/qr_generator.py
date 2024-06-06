#!/usr/bin/env python3
"""Generates qr codes for Tweeps"""
import qrcode
from PIL import Image


if __name__ == '__main__':
    data = "https://tweeps.onrender.com"

    qr = qrcode.QRCode(
        version=1,
        error_correction=qrcode.constants.ERROR_CORRECT_H,
        box_size=10,
        border=4,
    )

    qr.add_data(data)
    qr.make(fit=True)

    img = qr.make_image(fill_color="#200C07", back_color="#F3AC2C")

    img.save("Tweeps_site_qr_code.png")

    img.show()
