Fork of [nototools](https://github.com/googlefonts/nototools) 

Customization of nototools to convert and merge font files to proper format needed for pdf generators such as [pdfMake](https://github.com/bpampuch/pdfmake).

## Description
In [noto fonts](https://www.google.com/get/noto/) latin characters are separated out from downloadable `.ttf` files for non latin language sets - with the exception of the cjk `.otf` files - so they need to be merged back using the `merge_fonts.py` script and finally converted to base64. Base64 format is needed for a pdf generator such as [pdfmake](https://github.com/bpampuch/pdfmake) to properly generate characters in latin and the language specified vs only the language specified.

## Instructions
First follow instructions from the Noto Tools section below for installation or just install pip and requirements.txt packages. Download all fonts [noto fonts](https://www.google.com/get/noto/) to use as source for script (alternatively - modify dicts in `merge_fonts.py` and include font files as needed).

See `merge_fonts.py` for more instructions on usage or use already merged fonts from `merged_fonts` directory. *note that otf files from CJK (Chinese, Japanese and Korean) cannot be merged and instead should be built either from the default provided fonts in `merged_fonts` directory or [here](https://github.com/m13253/kaigen-fonts) (converted noto sans cjk `.otf` files).

To convert merged fonts to base64, make sure all merged font files are in `merged_fonts` directory then install node modules and run `gulp buildFonts` and find built files of base64 data in `build` directory. 

---

# Noto Tools

The `nototools` python package contains python scripts used to maintain the [Noto Fonts](https://github.com/googlefonts/noto-fonts/) project, including the [google.com/get/noto](https://www.google.com/get/noto) website.

## Installation

On Mac OS X, install dependencies with [homebrew](https://brew.sh)

    brew install --with-cairo harfbuzz cairo pango pygtk imagemagick

Install python dependencies,

    pip install -r requirements.txt

Then install nototools.  Since nototools changes frequently, installing using 'editable' mode is recommended:

    pip install -e .

## Usage

The following scripts are provided:

* `autofix_for_release.py`
* `add_vs_cmap.py`
* `coverage.py`
* `create_image.py`
* `decompose_ttc.py`
* `drop_hints.py`
* `dump_otl.py`
* `fix_khmer_and_lao_coverage.py`
* `fix_noto_cjk_thin.py`
* `generate_sample_text.py`
* `generate_website_2_data.py`
* `merge_noto.py`
* `merge_fonts.py`
* `noto_lint.py`
* `scale.py`
* `subset.py`
* `subset_symbols.py`
* `test_vertical_extents.py`

The following tools are provided:

* `notodiff`
