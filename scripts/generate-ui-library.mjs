import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const uiDir = path.join(root, "components", "ui");

const pairs = [
  ["accordion", "Accordion"],
  ["alert", "Alert"],
  ["alert-dialog", "AlertDialog"],
  ["anchor-link", "AnchorLink"],
  ["app-bar", "AppBar"],
  ["aspect-ratio", "AspectRatio"],
  ["avatar", "Avatar"],
  ["avatar-group", "AvatarGroup"],
  ["backdrop", "Backdrop"],
  ["badge", "Badge"],
  ["banner", "Banner"],
  ["bottom-navigation", "BottomNavigation"],
  ["bottom-sheet", "BottomSheet"],
  ["breadcrumb", "Breadcrumb"],
  ["button", "Button"],
  ["button-group", "ButtonGroup"],
  ["calendar", "Calendar"],
  ["card", "Card"],
  ["carousel", "Carousel"],
  ["chart", "Chart"],
  ["checkbox", "Checkbox"],
  ["chip", "Chip"],
  ["code-block", "CodeBlock"],
  ["collapsible", "Collapsible"],
  ["color-picker", "ColorPicker"],
  ["combobox", "Combobox"],
  ["command-menu", "CommandMenu"],
  ["context-menu", "ContextMenu"],
  ["countdown", "Countdown"],
  ["data-grid", "DataGrid"],
  ["data-table", "DataTable"],
  ["date-picker", "DatePicker"],
  ["date-range-picker", "DateRangePicker"],
  ["dialog", "Dialog"],
  ["divider", "Divider"],
  ["drawer", "Drawer"],
  ["dropdown-menu", "DropdownMenu"],
  ["empty-state", "EmptyState"],
  ["error-boundary", "ErrorBoundary"],
  ["expandable-panel", "ExpandablePanel"],
  ["file-input", "FileInput"],
  ["file-preview", "FilePreview"],
  ["floating-action-button", "FloatingActionButton"],
  ["footer", "Footer"],
  ["form", "Form"],
  ["grid", "Grid"],
  ["header", "Header"],
  ["hero-section", "HeroSection"],
  ["hover-card", "HoverCard"],
  ["icon", "Icon"],
  ["icon-button", "IconButton"],
  ["image", "Image"],
  ["image-gallery", "ImageGallery"],
  ["infinite-scroll", "InfiniteScroll"],
  ["input", "Input"],
  ["input-otp", "InputOtp"],
  ["label", "Label"],
  ["layout", "Layout"],
  ["lightbox", "Lightbox"],
  ["link", "Link"],
  ["list", "List"],
  ["list-item", "ListItem"],
  ["loader", "Loader"],
  ["loading-spinner", "LoadingSpinner"],
  ["masonry-grid", "MasonryGrid"],
  ["menu", "Menu"],
  ["message-bubble", "MessageBubble"],
  ["modal", "Modal"],
  ["multi-select", "MultiSelect"],
  ["navigation-menu", "NavigationMenu"],
  ["navbar", "Navbar"],
  ["notification-bell", "NotificationBell"],
  ["pagination", "Pagination"],
  ["popover", "Popover"],
  ["progress", "Progress"],
  ["progress-circle", "ProgressCircle"],
  ["qr-code", "QrCode"],
  ["radio-group", "RadioGroup"],
  ["range-slider", "RangeSlider"],
  ["rating", "Rating"],
  ["rich-text-editor", "RichTextEditor"],
  ["scroll-area", "ScrollArea"],
  ["search-bar", "SearchBar"],
  ["section", "Section"],
  ["select", "Select"],
  ["separator", "Separator"],
  ["sheet", "Sheet"],
  ["sidebar", "Sidebar"],
  ["skeleton", "Skeleton"],
  ["slider", "Slider"],
  ["snackbar", "Snackbar"],
  ["spinner", "Spinner"],
  ["split-button", "SplitButton"],
  ["stack", "Stack"],
  ["statistic-card", "StatisticCard"],
  ["stepper", "Stepper"],
  ["sticky-header", "StickyHeader"],
  ["submenu", "Submenu"],
  ["switch", "Switch"],
  ["tab", "Tab"],
  ["table", "Table"],
  ["tabs", "Tabs"],
  ["tag", "Tag"],
  ["text", "Text"],
  ["textarea", "Textarea"],
  ["theme-toggle", "ThemeToggle"],
  ["timeline", "Timeline"],
  ["time-picker", "TimePicker"],
  ["toast", "Toast"],
  ["toggle", "Toggle"],
  ["toggle-group", "ToggleGroup"],
  ["toolbar", "Toolbar"],
  ["tooltip", "Tooltip"],
  ["tree-view", "TreeView"],
  ["upload-zone", "UploadZone"],
  ["user-menu", "UserMenu"],
  ["verification-code-input", "VerificationCodeInput"],
  ["video-player", "VideoPlayer"],
  ["virtual-list", "VirtualList"],
  ["widget", "Widget"],
  ["wizard", "Wizard"],
  ["zoom-viewer", "ZoomViewer"],
];

function generic(fileBase, name) {
  const slug = fileBase.replace(/-/g, "");
  return `import * as React from "react";
import { cn } from "@/lib/utils/cn";

export interface ${name}Props extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

/** Présentation UI — étendre selon le besoin métier. */
export function ${name}({ className, children, ...props }: ${name}Props) {
  return (
    <div data-ui="${slug}" className={cn(className)} {...props}>
      {children}
    </div>
  );
}
`;
}

fs.mkdirSync(uiDir, { recursive: true });

for (const [fileBase, name] of pairs) {
  fs.writeFileSync(
    path.join(uiDir, `${fileBase}.tsx`),
    generic(fileBase, name),
    "utf8",
  );
}

const indexLines = pairs.map(
  ([file, name]) => `export { ${name} } from "./${file}";`,
);
fs.writeFileSync(path.join(uiDir, "index.ts"), indexLines.join("\n") + "\n", "utf8");

console.log(`Generated ${pairs.length} exports in components/ui`);
