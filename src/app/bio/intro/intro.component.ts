import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {

  hackathons = [
    {
      name: 'GT Hackathon (2018 Winner)'
    },
    {
      name: 'GSU Hackathon'
    },
    {
      name: 'Atlanta Hackathon'
    },
    {
      name: 'Emory Hackathon'
    },
  ];

  aiProj = [
    {
      name: 'Predictive Analytics (Macy\'s Technology)',
      route: ''
    },
    {
      name: 'Buzzcourse',
      route: ''
    },
    {
      name: 'Game AI',
      route: ''
    },
    {
      name: 'Knowledge-based AI',
      route: ''
    },
    {
      name: 'Robotics',
      route: ''
    },
  ];

  systemsProj = [
    {
      name: 'Full-stack Compiler',
      route: ''
    },
    {
      name: 'Operating System',
      route: ''
    },
    {
      name: 'Networking Architecture',
      route: ''
    },
    {
      name: 'Database System',
      route: ''
    },
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
