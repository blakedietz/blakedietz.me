---
title: Create react app Tailwind UI starter
date: "2020-04-27T00:00:00.000Z"
description: How to set up create react app with Tailwind UI
slug: "/blog/2020-05-25/cra-tailwind-ui"
draft: true
---
```bash
#vpype read idaho-a2.svg crop 0mm 0mm 297mm 210mm write --page-format a4 --landscape idaho-a4-0.svg
#vpype read idaho-a2.svg crop 0mm 0mm 297mm 210mm write --page-format a4 idaho-a4-1.svg

# a2 landscape
vpype read in.svg scale 1.75 1.75 write --page-format 594mmx420mm --center idaho-a2.svg

# seemed to work better than all one command at a time
vpype read idaho-a2.svg crop 0mm 0mm 297mm 210mm write idaho-a4-0.svg
vpype read idaho-a4-0.svg write --page-format a4 --landscape idaho-a4-0.svg
vpype read idaho-a2.svg crop 297mm 0mm 297mm 210mm write idaho-a4-1.svg
vpype read idaho-a4-1.svg write --page-format a4 --landscape idaho-a4-1.svg
vpype read idaho-a2.svg crop 0mm 210mm 297mm 210mm write idaho-a4-2.svg
vpype read idaho-a4-2.svg write --page-format a4 --landscape idaho-a4-2.svg
vpype read idaho-a2.svg crop 297mm 210mm 297mm 210mm write idaho-a4-3.svg
vpype read idaho-a4-3.svg write --page-format a4 --landscape idaho-a4-3.svg

```

```bash
# recommended in post
vpype read idaho-a2.svg crop 0mm 0mm 297mm 210mm write --page-format a4 --landscape --center idaho-a4-0.svg
```

```bash
# Visualuze the print itself
vpype read idaho-a2.svg show -ag -u mm


# Crop first quadrant center it
vpype read idaho-a2.svg crop 0mm 0mm 297mm 210mm write --page-format a4 --landscape --center idaho-a4-0.svg
# Visualize the first quadrant of the print
vpype read idaho-a4-0.svg show -ag -u mm

# Crop second quadrant and center it
vpype read idaho-a2.svg crop 297mm 0mm 297mm 210mm write --page-format a4 --landscape --center idaho-a4-1.svg
# Visualize the second quadrant of the print
vpype read idaho-a4-1.svg show -ag -u mm

# Crop third quadrant and center it
vpype read idaho-a2.svg crop 0mm 210mm 297mm 210mm write --page-format a4 --landscape --center idaho-a4-2.svg
# Visualize the third quadrant of the print
vpype read idaho-a4-2.svg show -ag -u mm

# Crop third quadrant and center it
vpype read idaho-a2.svg crop 297mm 210mm 297mm 210mm write --page-format a4 --landscape --center idaho-a4-3.svg
# Visualize the third quadrant of the print
vpype read idaho-a4-3.svg show -ag -u mm
```

```
# Read in the original svg upscale it and change the format to 4x size of
vpype read in.svg scale 1.75 1.75 write --page-format 22inx17in --center idaho-4xletter.svg

# Crop first quadrant center it
vpype read idaho-4xletter.svg crop 0in 0in 11in 8.5in write --page-format letter --landscape --center idaho-letter-0.svg
# Visualize the first quadrant of the print
vpype read idaho-letter-0.svg show -ag -u in

# Crop second quadrant and center it
vpype read idaho-4xletter.svg crop 11in 0in 11in 8.5in write --page-format letter --landscape --center idaho-letter-1.svg
# Visualize the second quadrant of the print
vpype read idaho-letter-1.svg show -ag -u in

# Crop third quadrant and center it
vpype read idaho-4xletter.svg crop 0in 8.5in 11in 8.5in write --page-format letter --landscape --center idaho-letter-2.svg
# Visualize the third quadrant of the print
vpype read idaho-letter-2.svg show -ag -u in

# Crop third quadrant and center it
vpype read idaho-4xletter.svg crop 11in 8.5in 11in 8.5in translate -- -10.75in -7.5in write --page-format letter --landscape idaho-letter-3.svg
# Visualize the third quadrant of the print
vpype read idaho-letter-3.svg show -ag -u in
```
