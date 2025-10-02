// tree-node.interface.ts
export interface TreeNode {
  id: string;
  label: string;
  checked: boolean;
  indeterminate: boolean;
  expanded: boolean;
  children?: TreeNode[];
}
