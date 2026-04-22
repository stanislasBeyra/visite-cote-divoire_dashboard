import * as React from "react";
import { cn } from "@/lib/utils/cn";

export type TreeNode = {
  id: string;
  label: string;
  children?: TreeNode[];
};

export interface TreeViewProps extends React.HTMLAttributes<HTMLDivElement> {
  nodes: TreeNode[];
}

function Branch({
  nodes,
  depth = 0,
}: {
  nodes: TreeNode[];
  depth?: number;
}) {
  return (
    <ul className={cn("list-none space-y-1", depth > 0 && "ml-3 border-l border-line pl-3")}>
      {nodes.map((n) => (
        <li key={n.id} className="text-sm">
          <span className="text-foreground">{n.label}</span>
          {n.children && n.children.length > 0 && (
            <Branch nodes={n.children} depth={depth + 1} />
          )}
        </li>
      ))}
    </ul>
  );
}

export function TreeView({ nodes, className, ...props }: TreeViewProps) {
  return (
    <div data-ui="treeview" className={cn(className)} {...props}>
      <Branch nodes={nodes} />
    </div>
  );
}
