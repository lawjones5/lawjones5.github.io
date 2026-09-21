---
title: "MHD DNS in Liquid Metal Fusion Breeder Blankets using CHAPsim2"
date: "2024-05-15"
category: "projects"
summary: "Investigating magnetohydrodynamic (MHD) turbulence and duct flow phenomena in liquid metal breeder blankets using the high-fidelity DNS code CHAPsim2."
tags: ["MHD", "CHAPsim2", "Liquid Metals", "DNS", "Fusion"]
author: "Lawrence Jones"
---

# MHD DNS in Liquid Metal Fusion Breeder Blankets using CHAPsim2

In magnetic confinement fusion reactors (such as Tokamaks), the **breeder blanket** is a core component tasked with:
1. Tritium breeding to sustain the D-T fusion fuel cycle.
2. Efficient thermal energy extraction for electricity generation.
3. Radiation shielding for superconducting magnetic coils.

Liquid metal blankets (e.g., using Lead-Lithium eutectic alloys like PbLi) are a primary candidate design. However, the presence of strong external magnetic fields gives rise to complex **Magnetohydrodynamic (MHD)** flow phenomena.

---

## The Challenge: Hartmann Layers & Turbulence Suppression

When an electrically conducting fluid moves across strong magnetic fields, Lorentz forces are generated ($\mathbf{J} \times \mathbf{B}$). These forces:
- Create steep velocity gradients in boundary layers (Hartmann layers and side/Shercliff layers).
- Cause high MHD pressure drops that challenge structural engineering and pumping limits.
- Anisotropically damp turbulence, generating quasi-two-dimensional (Q2D) vortices and complex heat transfer modifications.

```
       B-field (Toroidal / Poloidal)
              ^
              |
   +-----------------------+  <- Hartmann Layer
   |                       |
   |   Core Flow (Flat)    |  ==> Flow Direction
   |                       |
   +-----------------------+  <- Hartmann Layer
```

---

## Computational Methodology with CHAPsim2

To capture these phenomena without reliance on empirical turbulence closures, we employ **CHAPsim2** (Channel and Pipe Simulator 2), a high-fidelity Direct Numerical Simulation (DNS) code specifically adapted for incompressible and low-magnetic Reynolds number MHD flows.

Key simulation features:
- **Numerical Discretization**: High-order finite difference / spectral methods on staggered grids.
- **Poisson Solvers**: Highly scalable parallel solvers for electric potential and pressure.
- **Physical Regimes**: High Hartmann numbers ($Ha$) and Reynolds numbers ($Re$), capturing transition to turbulence, instability mechanisms, and thermal convection coupling.

---

## Ongoing Work & Objectives

- Validating velocity profiles and skin friction against experimental measurements from liquid metal test loops.
- Simulating non-isothermal buoyant-MHD mixed convection to characterize hotspot formation.
- Assessing insulating coatings and flow channel inserts (FCIs) to reduce MHD drag.
