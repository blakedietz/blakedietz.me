```bash
#vpype read idaho-a2.svg crop 0mm 0mm 297mm 210mm write --page-format a4 --landscape idaho-a4-0.svg
#vpype read idaho-a2.svg crop 0mm 0mm 297mm 210mm write --page-format a4 idaho-a4-1.svg

# a2 landscape
vpype read in.svg scale 1.50 1.50 write --page-format 594mmx420mm --center idaho-a2.svg

vpype read idaho-a2.svg crop 0mm 0mm 297mm 210mm write idaho-a4-0.svg
vpype read idaho-a4-0.svg write --page-format a4 --landscape idaho-a4-0.svg
vpype read idaho-a2.svg crop 297mm 0mm 297mm 210mm write idaho-a4-1.svg
vpype read idaho-a4-1.svg write --page-format a4 --landscape idaho-a4-1.svg
vpype read idaho-a2.svg crop 0mm 210mm 297mm 210mm write idaho-a4-2.svg
vpype read idaho-a4-2.svg write --page-format a4 --landscape idaho-a4-2.svg
vpype read idaho-a2.svg crop 297mm 210mm 297mm 210mm write idaho-a4-3.svg
vpype read idaho-a4-3.svg write --page-format a4 --landscape idaho-a4-3.svg
```

