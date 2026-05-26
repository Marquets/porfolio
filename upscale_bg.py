from PIL import Image, ImageEnhance, ImageFilter
import random

def add_noise(image, factor=0.05):
    width, height = image.size
    pixels = image.load()
    for x in range(width):
        for y in range(height):
            r, g, b = pixels[x, y]
            noise = int(random.gauss(0, factor * 255))
            pixels[x, y] = (
                max(0, min(255, r + noise)),
                max(0, min(255, g + noise)),
                max(0, min(255, b + noise))
            )
    return image

def upscale_and_texture(input_path, output_path, scale_factor=2):
    try:
        print(f"Processing {input_path}...")
        img = Image.open(input_path)
        
        # 1. Upscale with Lanczos
        new_size = (int(img.width * scale_factor), int(img.height * scale_factor))
        img = img.resize(new_size, Image.Resampling.LANCZOS)
        
        # 2. Stronger Sharpening
        enhancer = ImageEnhance.Sharpness(img)
        img = enhancer.enhance(2.0) # Stronger sharpening
        
        # 3. Add Film Grain (Noise)
        # This adds 'texture' which tricks the eye into seeing more detail
        # and hides the 'softness' of the upscaling
        print("Adding film grain...")
        img = add_noise(img, factor=0.03)
        
        # 4. Slight Contrast Boost
        enhancer = ImageEnhance.Contrast(img)
        img = enhancer.enhance(1.1)

        img.save(output_path, quality=95)
        print(f"Saved textured HD image to {output_path}")

    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    input_file = "public/sidebar-bg.jpg"
    output_file = "public/sidebar-bg-textured.jpg"
    upscale_and_texture(input_file, output_file, scale_factor=2)
