import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { IconDefinition } from '@ant-design/icons-angular';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzTimelineModule } from 'ng-zorro-antd/timeline';
import { NzResultModule } from 'ng-zorro-antd/result';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzTimePickerModule } from 'ng-zorro-antd/time-picker';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { NzCommentModule } from 'ng-zorro-antd/comment';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';

import {
  DashboardOutline,
  BellFill,
  QuestionCircleFill,
  TeamOutline,
  SettingOutline,
  MenuOutline,
  DownloadOutline,
  UploadOutline,
  ReloadOutline,
  EllipsisOutline,
  EditOutline,
  StarOutline,
  MinusCircleOutline,
  DeleteOutline,
  StarFill,
  FilterFill,
  CheckCircleOutline,
  CheckOutline,
  DollarCircleOutline,
  SkypeOutline,
  TwitterOutline,
  PlusOutline,
  MinusOutline,
  ContactsOutline,
  SearchOutline,
  UpOutline,
  ClockCircleOutline,
  CloseOutline,
  BankOutline,
  InboxOutline,
  EyeFill,
  PhoneOutline,
  MobileOutline,
  BookOutline
} from '@ant-design/icons-angular/icons';


const icons: IconDefinition[] = [
  DashboardOutline,
  BellFill,
  QuestionCircleFill,
  TeamOutline,
  SettingOutline,
  MenuOutline,
  DownloadOutline,
  UploadOutline,
  ReloadOutline,
  EllipsisOutline,
  EditOutline,
  StarOutline,
  MinusCircleOutline,
  DeleteOutline,
  StarFill,
  FilterFill,
  CheckCircleOutline,
  CheckOutline,
  DollarCircleOutline,
  SkypeOutline,
  TwitterOutline,
  PlusOutline,
  MinusOutline,
  ContactsOutline,
  SearchOutline,
  UpOutline,
  ClockCircleOutline,
  CloseOutline,
  BankOutline,
  InboxOutline,
  EyeFill,
  PhoneOutline,
  MobileOutline,
  BookOutline
];

const modules = [
  FormsModule,
  ReactiveFormsModule,
  NzCardModule,
  NzGridModule,
  NzInputModule,
  NzSelectModule,
  NzFormModule,
  NzButtonModule,
  NzCheckboxModule,
  NzDrawerModule,
  NzIconModule.forRoot(icons),
  NzTimelineModule,
  NzResultModule,
  NzTableModule,
  NzUploadModule,
  NzRadioModule,
  NzAvatarModule,
  NzToolTipModule,
  NzBreadCrumbModule,
  NzDropDownModule,
  NzPageHeaderModule,
  NzBadgeModule,
  NzModalModule,
  NzSpinModule,
  NzDividerModule,
  NzNotificationModule,
  NzTagModule,
  NzAlertModule,
  NzTabsModule,
  NzDatePickerModule,
  NzCollapseModule,
  NzPaginationModule,
  NzTimePickerModule,
  NzListModule,
  NzProgressModule,
  NzAutocompleteModule,
  NzCommentModule,
  NzStepsModule,
  NzInputNumberModule
];

@NgModule({
  imports: [modules],
  exports: [modules],
})
export class UiElementsModule {}
