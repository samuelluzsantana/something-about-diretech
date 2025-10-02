import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeNode } from './tree-node.interface';

@Component({
  selector: 'app-tree-view',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="tree-view">
      <div class="tree-node" *ngFor="let node of treeData">
        <ng-container *ngTemplateOutlet="nodeTemplate; context: { $implicit: node, level: 0 }"></ng-container>
      </div>
    </div>

    <ng-template #nodeTemplate let-node let-level="level">
      <div class="node-content" [style.padding-left.px]="level * 20">
        <span class="toggle" (click)="toggleExpand(node)" *ngIf="node.children && node.children.length > 0">
          {{ node.expanded ? '▼' : '▶' }}
        </span>
        <span class="spacer" *ngIf="!node.children || node.children.length === 0"></span>
        
        <input 
          type="checkbox" 
          [checked]="node.checked"
          [indeterminate]="node.indeterminate"
          (change)="onCheckChange(node, $event)"
          class="checkbox"
        />
        
        <span class="label">{{ node.label }}</span>
      </div>
      
      <div *ngIf="node.expanded && node.children" class="children">
        <div *ngFor="let child of node.children">
          <ng-container *ngTemplateOutlet="nodeTemplate; context: { $implicit: child, level: level + 1 }"></ng-container>
        </div>
      </div>
    </ng-template>
  `,
  styles: [`
    .tree-view {
      font-family: Arial, sans-serif;
      padding: 16px;
      background: #f5f5f5;
      border-radius: 8px;
    }

    .node-content {
      display: flex;
      align-items: center;
      padding: 6px 8px;
      cursor: pointer;
      user-select: none;
      transition: background 0.2s;
    }

    .node-content:hover {
      background: #e0e0e0;
      border-radius: 4px;
    }

    .toggle {
      width: 20px;
      cursor: pointer;
      font-size: 12px;
      color: #666;
    }

    .spacer {
      width: 20px;
    }

    .checkbox {
      margin: 0 8px;
      cursor: pointer;
      width: 16px;
      height: 16px;
    }

    .checkbox:indeterminate {
      position: relative;
    }

    .label {
      font-size: 14px;
      color: #333;
    }

    .children {
      margin-left: 0;
    }
  `]
})
export class TreeViewComponent {
  treeData: TreeNode[] = [
    {
      id: '1',
      label: 'Documentos',
      checked: false,
      indeterminate: false,
      expanded: true,
      children: [
        {
          id: '1-1',
          label: 'Trabalho',
          checked: false,
          indeterminate: false,
          expanded: false,
          children: [
            {
              id: '1-1-1',
              label: 'Relatório.pdf',
              checked: false,
              indeterminate: false,
              expanded: false
            },
            {
              id: '1-1-2',
              label: 'Apresentação.pptx',
              checked: false,
              indeterminate: false,
              expanded: false
            }
          ]
        },
        {
          id: '1-2',
          label: 'Pessoal',
          checked: false,
          indeterminate: false,
          expanded: false,
          children: [
            {
              id: '1-2-1',
              label: 'Fotos.zip',
              checked: false,
              indeterminate: false,
              expanded: false
            }
          ]
        }
      ]
    },
    {
      id: '2',
      label: 'Downloads',
      checked: false,
      indeterminate: false,
      expanded: false,
      children: [
        {
          id: '2-1',
          label: 'Software.exe',
          checked: false,
          indeterminate: false,
          expanded: false
        },
        {
          id: '2-2',
          label: 'Manual.pdf',
          checked: false,
          indeterminate: false,
          expanded: false
        }
      ]
    },
    {
      id: '3',
      label: 'Projetos',
      checked: false,
      indeterminate: false,
      expanded: false
    }
  ];

  toggleExpand(node: TreeNode): void {
    node.expanded = !node.expanded;
  }

  onCheckChange(node: TreeNode, event: Event): void {
    const checked = (event.target as HTMLInputElement).checked;
    this.setNodeChecked(node, checked);
    this.updateParentState(this.treeData);
  }

  private setNodeChecked(node: TreeNode, checked: boolean): void {
    node.checked = checked;
    node.indeterminate = false;
    
    if (node.children) {
      node.children.forEach(child => this.setNodeChecked(child, checked));
    }
  }

  private updateParentState(nodes: TreeNode[]): void {
    nodes.forEach(node => {
      if (node.children && node.children.length > 0) {
        this.updateParentState(node.children);
        
        const checkedCount = node.children.filter(c => c.checked).length;
        const indeterminateCount = node.children.filter(c => c.indeterminate).length;
        
        if (checkedCount === node.children.length) {
          node.checked = true;
          node.indeterminate = false;
        } else if (checkedCount > 0 || indeterminateCount > 0) {
          node.checked = false;
          node.indeterminate = true;
        } else {
          node.checked = false;
          node.indeterminate = false;
        }
      }
    });
  }
}
