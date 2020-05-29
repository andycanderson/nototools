Fork of [nototools](https://github.com/googlefonts/nototools) 

This is a customization of nototools to convert and merge font files to proper format needed for pdf generators such as [pdfMake](https://github.com/bpampuch/pdfmake).

## Description
In [noto fonts](https://www.google.com/get/noto/) latin characters are separated out from downloadable `.ttf` files for non latin language sets - with the exception of the cjk `.otf` files. 

This package provides the tools generate required font data for pdf generator such as [pdfmake](https://github.com/bpampuch/pdfmake) to properly generate characters in latin and the language specified vs only the language specified as otherwise would show as tofu blocks or empty spaces.

## Instructions
Clone repository or install or `npm install nototools-pdf-fonts`

On Mac OS X, install dependencies with [homebrew](https://brew.sh)
 
    brew install --with-cairo harfbuzz cairo pango pygtk imagemagick

Install python dependencies,

    pip install -r requirements.txt

Then install nototools.  Since nototools changes frequently, installing using 'editable' mode is recommended:

    pip install -e .

Download all fonts [noto fonts](https://www.google.com/get/noto/) to use as source for script (alternatively - modify dicts in `merge_fonts.py` and only include font files as needed).

See `merge_fonts.py` for more instructions on usage or use already merged fonts from `merged_fonts` directory. 

*note that otf files from CJK (Chinese, Japanese and Korean) cannot be merged and instead should be built either from the default provided fonts in `merged_fonts` directory or [here](https://github.com/m13253/kaigen-fonts) (converted noto sans cjk `.otf` files).

To convert merged fonts to base64, make sure all merged font files are in `merged_fonts` directory then install node modules and run `gulp buildFonts` and find built files of base64 data in `build` directory. 
