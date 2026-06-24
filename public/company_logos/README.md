# Company Logos

Place company logo images in this directory. The Outcomes component will automatically display them.

## Required Images

- `stackgen-logo.png` - StackGen company logo
- `bytedance-logo.png` - ByteDance company logo
- `agora-logo.png` - Agora company logo

## Image Specifications

- **Format**: PNG (preferred) or SVG
- **Recommended size**: 40x40 pixels (or square aspect ratio)
- **Background**: Transparent or white
- **File naming**: Lowercase with hyphens (e.g., `company-name-logo.png`)

## Adding New Company Logos

1. Save the logo file in this directory
2. Update the `companyLogos` mapping in `/components/Outcomes/Outcomes.tsx`
3. Add the path like: `'CompanyName': '${getBasePath()}/company_logos/companyname-logo.png'`
