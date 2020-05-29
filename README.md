Fork of [nototools](https://github.com/googlefonts/nototools) 

This is a customization of nototools to convert and merge font files to proper format needed for pdf generators such as [pdfMake](https://github.com/bpampuch/pdfmake).

## Description
In [noto fonts](https://www.google.com/get/noto/) latin characters are separated out from downloadable `.ttf` files for non latin language sets - with the exception of the cjk `.otf` files. 

This package provides the tools generate required font data for pdf generator such as [pdfmake](https://github.com/bpampuch/pdfmake) to properly generate characters in latin and the language specified vs only the language specified as otherwise would show as tofu blocks or empty spaces.

## Instructions
Clone repository locally or install:
- Locally
    
        npm install
    
- As npm module

        npm install --save-dev nototools-pdf-fonts && npm install --save-dev gulp && npm install --save-dev gulp-each

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

        gulp buildFonts 
 
- As a npm module

        gulp --cwd './node_modules/nototools-pdf-fonts

Find built files of base64 in `build` directory. 
