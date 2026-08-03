from PIL import Image
import colorsys

try:
    img = Image.open('public/hero-new-image.jpg').convert('RGBA')
    pixels = img.load()

    for y in range(img.height):
        for x in range(img.width):
            r, g, b, a = pixels[x, y]
            h, s, v = colorsys.rgb_to_hsv(r/255.0, g/255.0, b/255.0)
            
            if 0.52 <= h <= 0.75 and s > 0.3 and v > 0.2:
                # Target Navy: H=0.55, S=0.98, V=0.65
                new_h = 0.555
                new_s = min(1.0, s * 1.1)
                new_v = v * 0.6 # darken significantly
                
                nr, ng, nb = colorsys.hsv_to_rgb(new_h, new_s, new_v)
                pixels[x, y] = (int(nr*255), int(ng*255), int(nb*255), a)

    img.convert('RGB').save('public/hero-navy.jpg')
    print("Image processed successfully!")
except Exception as e:
    print(f"Error: {e}")
