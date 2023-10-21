import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ClipServiceService } from '../../services/clip-service.service';
import IClip from '../../models/cilp.model';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css'],
})
export class ManageComponent implements OnInit {
  videoOrder = '1';
  clips: IClip[] = [];
  activeClilp: IClip | null = null;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private clipService: ClipServiceService,
    private modal: ModalService,
  ) {}

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((params: Params) => {
      this.videoOrder = params.sort == 2 ? params.sort : '1';
    });

    this.clipService.getUserClips().subscribe((docs) => {
      this.clips = [];
      docs.forEach((doc) => {
        this.clips.push({
          docID: doc.id,
          ...doc.data(),
        });
      });
    });
  }

  sort(ev: Event) {
    const { value } = ev.target as HTMLSelectElement;
    // this.router.navigateByUrl(`/manage?sort=${value}`);
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        sort: value,
      },
    });
  }

  openModal($event: MouseEvent, clip: IClip) {
    $event.preventDefault();

    this.activeClilp = clip;
    this.modal.toggleModal('editClip');
  }

  updateClip($event: IClip) {
    this.clips.forEach((element, index) => {
      if (element.docID == $event.docID) {
        this.clips[index].title = $event.title;
      }
    });
  }

  deleteClip($event: Event, clip: IClip) {
    $event.preventDefault();
    this.clipService.deleteClip(clip);

    this.clips.forEach((element, index) => {
      if (element.docID == clip.docID) {
        this.clips.splice(index, 1);
      }
    });
  }
}
