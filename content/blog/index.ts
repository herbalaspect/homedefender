/**
 * Blog post registry. Manual imports give us static type safety and
 * Turbopack-friendly tree-shaking (no dynamic require globs).
 *
 * To add a post: drop a .ts file under posts/ exporting `post: BlogPost`,
 * then import + register it below. New posts use roof-* slugs (Content
 * Library §5); migrated posts are gutter-focused.
 */

import type { BlogPost } from "./types";

// Migrated (21 — gutter-focused).
import { post as bestGutterGuardsPineNeedles } from "./posts/best-gutter-guards-pine-needles";
import { post as bestGutterProtectionMadison } from "./posts/best-gutter-protection-madison-homes";
import { post as commonGutterProblemsMadison } from "./posts/common-gutter-problems-madison-climate";
import { post as diyVsProGutterGuardCost } from "./posts/diy-vs-pro-gutter-guard-cost";
import { post as gutterGuardInstallationCost } from "./posts/gutter-guard-installation-cost";
import { post as gutterGuardInstallationSigns } from "./posts/gutter-guard-installation-signs";
import { post as gutterGuardInstallationVsDiy } from "./posts/gutter-guard-installation-vs-diy";
import { post as gutterProtectionReducesMaintenanceCosts } from "./posts/gutter-protection-reduces-maintenance-costs";
import { post as hoodedVsMeshGutterGuards2025 } from "./posts/hooded-vs-mesh-gutter-guards-2025";
import { post as howMuchDoGutterGuardsCost } from "./posts/how-much-do-gutter-guards-cost";
import { post as howOftenCleanGutterGuards } from "./posts/how-often-clean-gutter-guards";
import { post as microMeshGutterGuardsBenefits } from "./posts/micro-mesh-gutter-guards-benefits";
import { post as professionalGutterGuardInstallation } from "./posts/professional-gutter-guard-installation";
import { post as reliableGutterRepairServiceMadison } from "./posts/reliable-gutter-repair-service-in-madison";
import { post as repairSaggingDetachedGuttersMadison } from "./posts/repair-sagging-detached-gutters-madison";
import { post as sectionalVsSeamlessGutterRepairMadison } from "./posts/sectional-vs-seamless-gutter-repair-madison";
import { post as signsYouNeedGutterGuards } from "./posts/signs-you-need-gutter-guards";
import { post as stepByStepGutterGuardInstallation } from "./posts/step-by-step-gutter-guard-installation";
import { post as typesOfGutterGuards } from "./posts/types-of-gutter-guards";
import { post as whyFoamGutterGuardsFail } from "./posts/why-foam-gutter-guards-fail";
import { post as whyGutterProtectionMadisonMust } from "./posts/why-gutter-protection-in-madison-wi-is-a-must-for-homeowners";

// New foundational roofing posts (Content Library §5 — 5 posts).
import { post as whenToReplaceRoofWisconsin } from "./posts/when-to-replace-roof-wisconsin";
import { post as roofReplacementCostMadison2026 } from "./posts/roof-replacement-cost-madison-2026-guide";
import { post as hailDamageRoofInspectionMadison } from "./posts/hail-damage-roof-inspection-madison";
import { post as asphaltShingleVsMetalRoofWisconsin } from "./posts/asphalt-shingle-vs-metal-roof-wisconsin";
import { post as howToChooseRoofingContractorMadison } from "./posts/how-to-choose-roofing-contractor-madison";

const posts: BlogPost[] = [
  bestGutterGuardsPineNeedles,
  bestGutterProtectionMadison,
  commonGutterProblemsMadison,
  diyVsProGutterGuardCost,
  gutterGuardInstallationCost,
  gutterGuardInstallationSigns,
  gutterGuardInstallationVsDiy,
  gutterProtectionReducesMaintenanceCosts,
  hoodedVsMeshGutterGuards2025,
  howMuchDoGutterGuardsCost,
  howOftenCleanGutterGuards,
  microMeshGutterGuardsBenefits,
  professionalGutterGuardInstallation,
  reliableGutterRepairServiceMadison,
  repairSaggingDetachedGuttersMadison,
  sectionalVsSeamlessGutterRepairMadison,
  signsYouNeedGutterGuards,
  stepByStepGutterGuardInstallation,
  typesOfGutterGuards,
  whyFoamGutterGuardsFail,
  whyGutterProtectionMadisonMust,
  whenToReplaceRoofWisconsin,
  roofReplacementCostMadison2026,
  hailDamageRoofInspectionMadison,
  asphaltShingleVsMetalRoofWisconsin,
  howToChooseRoofingContractorMadison,
];

/** All posts, newest first. */
export function getAllPosts(): BlogPost[] {
  return [...posts].sort((a, b) =>
    b.datePublished.localeCompare(a.datePublished)
  );
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getRelatedPosts(slug: string, limit = 3): BlogPost[] {
  const current = getPostBySlug(slug);
  if (!current) return [];
  return getAllPosts()
    .filter((p) => p.slug !== slug && p.category === current.category)
    .slice(0, limit);
}
