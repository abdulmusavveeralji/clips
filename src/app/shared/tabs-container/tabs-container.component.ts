import {AfterContentInit, Component, ContentChildren, QueryList} from '@angular/core';
import {TabsComponent} from "../tabs/tabs.component";

@Component({
  selector: 'app-tabs-container',
  templateUrl: './tabs-container.component.html',
  styleUrls: ['./tabs-container.component.css']
})
export class TabsContainerComponent implements AfterContentInit {
  @ContentChildren(TabsComponent) tabs: QueryList<TabsComponent> = new QueryList<TabsComponent>();
  ngAfterContentInit(): void {
    let activeTabs = this.tabs.filter(f => f.active);

    if(!activeTabs || activeTabs.length !==0){
      this.selectTab(this.tabs.first);
    }
  }

  selectTab(tab: TabsComponent) {
    this.tabs.forEach(e => e.active = false);

    tab.active = true;
  }

}
