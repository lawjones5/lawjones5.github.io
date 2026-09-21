---
title: "PhD Progress Update: CHAPsim2 Setup & Computational Scaling at Sheffield"
date: "2024-01-20"
category: "updates"
summary: "Commissioning DNS mesh scaling on high-performance computing clusters and initial benchmark runs."
tags: ["Update", "PhD", "University of Sheffield", "HPC"]
author: "Lawrence Jones"
---

# PhD Progress Update: CHAPsim2 Setup & Computational Scaling at Sheffield

A quick general update on research milestones and ongoing development in our department at the University of Sheffield.

---

## High-Performance Computing Scaling

Recent focus has been on validating parallel scaling of **CHAPsim2** across multi-node MPI architectures. With spatial grid resolutions reaching $1024 \times 512 \times 512$ mesh points for high Hartmann number runs, scaling of the 3D FFT/tridiagonal Poisson solver for electric potential is critical.

Key milestones reached this month:
1. Achieved $88\%$ parallel efficiency across 512 CPU cores on the university cluster.
2. Verified consistency of Hartmann layer resolution using non-uniform Chebyshev and hyperbolic-tangent wall clustering.
3. Established reproducible Python and Julia post-processing workflows for spectral energy budget calculations.

---

## What's Next

- Running production DNS cases for Hartmann number sweeps.
- Preparing poster presentation for upcoming UK fusion technology meetings.
- Refining coupled scalar transport equations for heat flux and tritium inventory calculations.
