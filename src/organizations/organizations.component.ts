import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-organizations',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './organizations.component.html',
  styleUrl: './organizations.component.css'
})
export class OrganizationsComponent implements OnInit{
  constructor(private route: ActivatedRoute, private titleService: Title) { }


  orgs: Orgs[] = [
    {
      id: 1,
      name: "Fayke Name",
      orgName: "Marching Band",
    },
    {
      id: 2,
      name: "Myaningles Wurdz",
      orgName: "A.C.M.",
    }];

    orgID: string | null = "1";
    orgName: string | null = "orgName";
    orgFacAdvisor: string | null = null;
    announcementsActive: boolean = true;


    ngOnInit() {
      console.warn("org id is:" + this.route.snapshot.paramMap.get('organization-id'));
      this.orgID = this.route.snapshot.paramMap.get('organization-id');
      if (this.orgID !== null) {
        const orgIdNumber = parseInt(this.orgID);
        this.orgName = this.orgs[orgIdNumber - 1]?.orgName;
        this.orgFacAdvisor = this.orgs[orgIdNumber - 1]?.name;
      }
  
      if(this.orgName !== null)
      this.setTitle("NDSU - "+this.orgName);
    }

    setTitle(newTitle: string) {
      this.titleService.setTitle(newTitle);
    }

}

interface Orgs {
  id: number;
  name: string;
  orgName: string;
}
