**Missing characters in pdfs when you try to display text in Noto Fonts with different languages?**

This is by design in noto fonts. Noto Tools already provides a way to merge fonts but this package is designed to streamline the process to generate the font files needed for pdfs without dropping characters.

In [noto fonts](https://www.google.com/get/noto/) latin characters are separated out from downloadable `.ttf` files for non latin language sets. Specifically when using a tool like [pdfmake](https://github.com/bpampuch/pdfmake) we need to merge latin character sets with other languages to properly see latin (including english and number) characters.

## Instructions
Clone repository locally or install:
- Locally
    
        npm install
    
- As npm module

        npm install --save-dev nototools-pdf-fonts

    - Then run `npm install` within nototools-pdf-fonts module directory

On Mac OS X, install dependencies with [homebrew](https://brew.sh)
 
    brew install --with-cairo harfbuzz cairo pango pygtk imagemagick

Install python dependencies in directory,

    pip install -r requirements.txt

Installing using 'editable' mode is recommended:

    pip install -e .

Download fonts from [noto fonts](https://www.google.com/get/noto/)

Merge fonts using `merge_fonts.py` - modify as needed(add downloaded font files to merge or skip this step to use already merged fonts provided in merged_fonts directory for the next step): 
    
    python3 dir_to_merge_fonts.py -d dir_to_notofonts_to_merge

*note that `.otf` files from CJK (Chinese, Japanese and Korean) cannot be merged and instead should be built directly to base64 using the CJK font files found in the `merged_fonts` directory which has been conveniently provided by [Kaigen Fonts](https://github.com/m13253/kaigen-fonts). Additional font weights can be supplied to this tool from there.*

Convert merged fonts to base64 using this tool: 
- As a cloned repo

        npx gulp buildFonts 
 
- As a npm module from root level of package.json

        npx gulp --cwd 'directory_to_nototools-pdf-fonts_module' buildFonts

Find built files of base64 in `build` directory of nototools-pdf-fonts module. 
