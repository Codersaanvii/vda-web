# VDA Website Image Assets Catalog

This directory contains the image assets for the Vinay Desai Architects (VDA) website, organized by section and use case.

---

## Folder Structure

```
public/images/
├── hero/          # Main header and introductory section images
├── projects/      # Project portfolio category images
├── team/          # Professional headshots for leadership custodians
└── general/       # General background, icons, and layout-specific graphics
```

---

## Image Asset Catalog

The following is a list of assets used across the VDA site, along with their file names (when downloaded locally) and current online sources.

### 1. Hero Images (`public/images/hero/`)
- **`hero-bg.jpg`**
  - **Description**: Main background banner displaying a modern office environment.
  - **Used In**: [Hero.tsx](file:///Users/Admin/vda_web/components/sections/Hero.tsx)
  - **Source URL**: `https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop`

### 2. Project Category Images (`public/images/projects/`)
- **`corporate-offices.jpg`**
  - **Description**: Image showing corporate workspaces.
  - **Used In**: [ProjectsMosaic.tsx](file:///Users/Admin/vda_web/components/sections/ProjectsMosaic.tsx) and [page.tsx](file:///Users/Admin/vda_web/app/projects/page.tsx)
  - **Source URL**: `https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=800&auto=format&fit=crop`

- **`it-workspaces.jpg`**
  - **Description**: High-tech collaborative open-plan workspace.
  - **Used In**: [ProjectsMosaic.tsx](file:///Users/Admin/vda_web/components/sections/ProjectsMosaic.tsx) and [page.tsx](file:///Users/Admin/vda_web/app/projects/page.tsx)
  - **Source URL**: `https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop`

- **`banking-financial.jpg`**
  - **Description**: Modern banks or secure client-facing environments.
  - **Used In**: [ProjectsMosaic.tsx](file:///Users/Admin/vda_web/components/sections/ProjectsMosaic.tsx) and [page.tsx](file:///Users/Admin/vda_web/app/projects/page.tsx)
  - **Source URL**: `https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=800&auto=format&fit=crop`

- **`healthcare-facilities.jpg`**
  - **Description**: Premium medical clinic interiors and receptions.
  - **Used In**: [ProjectsMosaic.tsx](file:///Users/Admin/vda_web/components/sections/ProjectsMosaic.tsx) and [page.tsx](file:///Users/Admin/vda_web/app/projects/page.tsx)
  - **Source URL**: `https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop`

- **`retail-showrooms.jpg`**
  - **Description**: Showroom styling combining displays and thematic lighting.
  - **Used In**: [ProjectsMosaic.tsx](file:///Users/Admin/vda_web/components/sections/ProjectsMosaic.tsx) and [page.tsx](file:///Users/Admin/vda_web/app/projects/page.tsx)
  - **Source URL**: `https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800&auto=format&fit=crop`

- **`hospitality-spaces.jpg`**
  - **Description**: Modern boutique lounge or hotel interior details.
  - **Used In**: [ProjectsMosaic.tsx](file:///Users/Admin/vda_web/components/sections/ProjectsMosaic.tsx) and [page.tsx](file:///Users/Admin/vda_web/app/projects/page.tsx)
  - **Source URL**: `https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800&auto=format&fit=crop`

### 3. Team Member Headshots (`public/images/team/`)
- **`vinay-desai.png`** (originally `vinay-desai.jpg`)
  - **Description**: Headshot of Vinay Desai (Founder & Principal Architect). Mapped to `Principal Architect.png` locally.
  - **Used In**: [constants.ts](file:///Users/Admin/vda_web/lib/constants.ts) (Referenced on the About page)
  - **Source URL**: Custom uploaded file.

- **`anjali-mehta.png`** (originally `anjali-mehta.jpg`)
  - **Description**: Headshot of Anjali Mehta (Director of Workplace Strategy). Mapped to `Design Executive.png` locally.
  - **Used In**: [constants.ts](file:///Users/Admin/vda_web/lib/constants.ts) (Referenced on the About page)
  - **Source URL**: Custom uploaded file.

- **`rohan-sawant.png`** (originally `rohan-sawant.jpg`)
  - **Description**: Headshot of Rohan Sawant (Head of Project Coordination). Mapped to `Site Coordinator.png` locally.
  - **Used In**: [constants.ts](file:///Users/Admin/vda_web/lib/constants.ts) (Referenced on the About page)
  - **Source URL**: Custom uploaded file.

### 4. General / Editorial (`public/images/general/`)
- **`about-studio.jpg`**
  - **Description**: High-end interior architecture details of the VDA studio.
  - **Used In**: [about/page.tsx](file:///Users/Admin/vda_web/app/about/page.tsx)
  - **Source URL**: `https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop`

- **`design-philosophy.jpg`**
  - **Description**: Architects/planners drawing blueprint sketches.
  - **Used In**: [StoryPhilosophy.tsx](file:///Users/Admin/vda_web/components/sections/StoryPhilosophy.tsx)
  - **Source URL**: `https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800&auto=format&fit=crop`

- **`design philosophy/`** (subfolder)
  - **`01.png`**, **`02.png`**, **`03.png`**
  - **Description**: Custom illustrations/graphics matching the 3 Design Philosophy Pillars (Function-First, User-Centric, Sustainable).
  - **Used In**: [Pillars.tsx](file:///Users/Admin/vda_web/components/sections/Pillars.tsx)
  - **Source URL**: Local custom uploaded files.
