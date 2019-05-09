import {Component} from '@angular/core';
import {FlatTreeControl} from '@angular/cdk/tree';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material';
import {Router} from '@angular/router';

interface Node {
  name: string;
  route?: string;
  children?: Node[];
  img?: string;
}

/** Flat node with expandable and level information */
interface FlatNode {
  expandable: boolean;
  name: string;
  level: number;
  route: string;
  img?: string;
}

const TREE_DATA: Node[] = [
  {
    name: 'Bio',
    route: 'bio',
    children: [
      {
        name: 'Intro',
        route: '/bio/intro',
        children: []
      },
      {
        name: 'Resume',
        route: '/bio/resume',
        children: []
      }
    ]
  },
  {
    name: 'Work Experience',
    route: 'work',
    children: [
      {
        name: 'Macy\'s Technology',
        route: '/work/macy-exp',
        children: []
      }
    ]
  },
  {
    name: 'Artificial Intelligence',
    route: 'ai',
    children: [
      {
        name: 'Knowledge-based AI',
        route: 'ai/knowledge-based',
        children: []
      },
      {
        name: 'Game AI',
        route: 'ai/game',
        children: []
      },
      {
        name: 'Robotic',
        route: 'ai/robotic',
        children: []
      },
      {
        name: 'Automated Algorithm',
        route: 'ai/auto-algo',
        children: []
      }
    ]
  },
  {
    name: 'Compiler and Interpreter',
    route: 'compiler',
    children: [
      {
        name: 'MIPS Compiler',
        route: 'compiler/mips'
      },
      {
        name: 'Compiler Research',
        route: 'compiler/research'
      }
    ]
  },
  {
    name: 'Systems and Networking',
    route: 'systems',
    children: [
      {
        name: 'Operating System',
        route: 'systems/os',
        children: []
      },
      {
        name: 'Networking',
        route: 'systems/networking',
        children: []
      },
      {
        name: 'Database System',
        route: 'systems/database',
        children: []
      },
    ]
  },
  {
    name: 'Personal Projects',
    route: 'personal',
    children: [
      {
        name: 'Buzzcourse',
        route: 'personal/buzzcourse',
        children: []
      },
      {
        name: 'Datascape',
        route: 'personal/datascape',
        children: []
      },
      {
        name: 'Philanthropic Platform (2nd place GT Hackathon)',
        route: 'personal/philanthropic',
        children: []
      },
    ]
  },
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  treeControl = new FlatTreeControl<FlatNode>(node => node.level, node => node.expandable);

  treeFlattener = new MatTreeFlattener(
    (node: Node, LEVEL: number): FlatNode => {
      return {
        expandable: !!node.children && node.children.length > 0,
        name: node.name,
        level: LEVEL,
        route: node.route,
        img: node.img
      };
    },
    node => node.level,
    node => node.expandable,
    node => node.children);

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor(private router: Router) {
    this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: FlatNode) => (node.expandable);

  handleRoute(node: FlatNode) {
    console.log(node);
    this.router.navigateByUrl(node.route);
  }
}
