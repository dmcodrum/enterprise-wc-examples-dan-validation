import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      title: 'Home',
    }
  },
  { 
    path: 'ids-accordion', 
    loadChildren: () => import('./components/ids-accordion/ids-accordion.module').then(m => m.IdsAccordionModule),
    data: {
      title: 'IDS Accordion',
      category: 'Layouts',
      description: 'Vertically Stacked Sections'
    },
  },
  { 
    path: 'ids-alert', 
    loadChildren: () => import('./components/ids-alert/ids-alert.module').then(m => m.IdsAlertModule),
    data: {
      title: 'IDS Alert',
      category: 'Form Inputs',
      description: 'Alert Indicator/icon'
    },
  },
  { 
    path: 'ids-checkbox', 
    loadChildren: () => import('./components/ids-checkbox/ids-checkbox.module').then(m => m.IdsCheckboxModule),
    data: {
      title: 'IDS Checkbox',
      category: 'Form Inputs',
      description: 'Checkbox Input Element'
    }
  },
  { 
    path: 'ids-checkbox-group',
    loadChildren: () => import('./components/ids-checkbox-group/ids-checkbox-group.module').then(m => m.IdsCheckboxGroupModule),
    data: {
      title: 'IDS Checkbox Group',
      category: 'Form Inputs',
      description: 'Group of checkboxes with label'
    }
  },
  { 
    path: 'ids-color-picker', 
    loadChildren: () => import('./components/ids-color-picker/ids-color-picker.module').then(m => m.IdsColorPickerModule),
    data: {
      title: 'IDS Color Picker',
      category: 'Form Inputs',
      description: 'Input field for colors'
    }
  },
  { 
    path: 'ids-data-label', 
    loadChildren: () => import('./components/ids-data-label/ids-data-label.module').then(m => m.IdsDataLabelModule),
    data: {
      title: 'IDS Data Label',
      category: 'Form Inputs',
      description: 'Readonly data/label component'
    }
  },
  { 
    path: 'ids-date-picker', 
    loadChildren: () => import('./components/ids-date-picker/ids-date-picker.module').then(m => m.IdsDatePickerModule),
    data: {
      title: 'IDS Date Picker',
      category: 'Form Inputs',
      description: 'Input field for date'
    }
  },
  { 
    path: 'ids-dropdown',
    loadChildren: () => import('./components/ids-dropdown/ids-dropdown.module').then(m => m.IdsDropdownModule),
    data: {
      title: 'IDS Drodown',
      category: 'Form Inputs',
      description: 'Select from a list of items'
    }
  },
  { 
    path: 'ids-editor',
    loadChildren: () => import('./components/ids-editor/ids-editor.module').then(m => m.IdsEditorModule),
    data: {
      title: 'IDS Editor',
      category: 'Form Inputs',
      description: 'An input for multi line rich text'
    }
  },
  { 
    path: 'ids-input',
    loadChildren: () => import('./components/ids-input/ids-input.module').then(m => m.IdsInputModule),
    data: {
      title: 'IDS Input',
      category: 'Form Inputs',
      description: 'Input element and features'
    }
  },
  { 
    path: 'ids-lookup',
    loadChildren: () => import('./components/ids-lookup/ids-lookup.module').then(m => m.IdsLookupModule),
    data: {
      title: 'IDS Lookups',
      category: 'Form Inputs',
      description: 'Select from a data grid list'
    }
  },
  { 
    path: 'ids-mask', 
    loadChildren: () => import('./components/ids-mask/ids-mask.module').then(m => m.IdsMaskModule),
    data: {
      title: 'IDS Mask',
      category: 'Form Inputs',
      description: 'Util for masking input'
    },
  },
  { 
    path: 'ids-popup', 
    loadChildren: () => import('./components/ids-popup/ids-popup.module').then(m => m.IdsPopupModule),
    data: {
      title: 'IDS Popup',
      category: 'Layouts',
      description: 'Displays a Popup container'
    }
  },
  { 
    path: 'ids-swaplist', 
    loadChildren: () => import('./components/ids-swaplist/ids-swaplist.module').then(m => m.IdsSwaplistModule),
    data: {
      title: 'IDS Swaplist',
      category: 'Lists',
      description: 'Displays Swaplist component'
    }
  },
  { 
    path: 'ids-tag', 
    loadChildren: () => import('./components/ids-tag/ids-tag.module').then(m => m.IdsTagModule),
    data: {
      title: 'IDS Tag',
      category: 'Navigation and Interaction',
      description: 'UI Classification'
    }
  },
  { 
    path: 'ids-tooltip', 
    loadChildren: () => import('./components/ids-tooltip/ids-tooltip.module').then(m => m.IdsTooltipModule),
    data: {
      title: 'IDS Tooltip',
      category: 'Messages and Alerts',
      description: 'A message tooltip that shows on click/hover/focus'
    },
  },
  { 
    path: 'ids-multiselect',
    loadChildren: () => import('./components/ids-multiselect/ids-multiselect.module').then(m => m.IdsMultiselectModule),
    data: {
      title: 'IDS Multiselect',
      category: 'Form Inputs',
      description: 'Select multiple values from a list'
    },
  },
  { 
    path: 'ids-radio',
    loadChildren: () => import('./components/ids-radio/ids-radio.module').then(m => m.IdsRadioModule),
    data: {
      title: 'IDS Radio',
      category: 'Form Inputs',
      description: 'Input Radio Element'
    },
  },
  { 
    path: 'ids-search-field', 
    loadChildren: () => import('./components/ids-search-field/ids-search-field.module').then(m => m.IdsSearchFieldModule),
    data: {
      title: 'IDS Search Field',
      category: 'Form Inputs',
      description: 'Interactive input for typing into search'
    },
  },
  { 
    path: 'ids-spinbox', 
    loadChildren: () => import('./components/ids-spinbox/ids-spinbox.module').then(m => m.IdsSpinboxModule),
    data: {
      title: 'IDS Spinbox',
      category: 'Form Inputs',
      description: 'Input element for numbers'
    },
  },
  { 
    path: 'ids-switch',
    loadChildren: () => import('./components/ids-switch/ids-switch.module').then(m => m.IdsSwitchModule),
    data: {
      title: 'IDS Switch',
      category: 'Form Inputs',
      description: 'Input element with on/off capabilities'
    },
  },
  { 
    path: 'ids-textarea', 
    loadChildren: () => import('./components/ids-textarea/ids-textarea.module').then(m => m.IdsTextareaModule),
    data: {
      title: 'IDS Textarea',
      category: 'Form Inputs',
      description: 'An input for multi line text'
    },
  },
  { 
    path: 'ids-time-picker',
    loadChildren: () => import('./components/ids-time-picker/ids-time-picker.module').then(m => m.IdsTimePickerModule),
    data: {
      title: 'IDS Time Picker',
      category: 'Form Inputs',
      description: 'Input field for time and dates'
    },
  },
  { 
    path: 'ids-trigger-field',
    loadChildren: () => import('./components/ids-trigger-field/ids-trigger-field.module').then(m => m.IdsTriggerFieldModule),
    data: {
      title: 'IDS Trigger Field',
      category: 'Form Inputs',
      description: 'An input field with an icon'
    },
  },
  { 
    path: 'ids-upload',
    loadChildren: () => import('./components/ids-upload/ids-upload.module').then(m => m.IdsUploadModule),
    data: {
      title: 'IDS Upload',
      category: 'Form Inputs',
      description: 'Upload a single file in a field'
    },
  },
  { 
    path: 'ids-upload-advanced',
    loadChildren: () => import('./components/ids-upload-advanced/ids-upload-advanced.module').then(m => m.IdsUploadAdvancedModule),
    data: {
      title: 'IDS Upload Advanced',
      category: 'Form Inputs',
      description: 'Upload multiple files'
    },
  },
  { 
    path: 'ids-action-sheet', 
    loadChildren: () => import('./components/ids-action-sheet/ids-action-sheet.module').then(m => m.IdsActionSheetModule),
    data: {
      title: 'IDS Action Sheet',
      category: 'Navigation and Interaction',
      description: 'Upload multiple files'
    },
  },
  { 
    path: 'ids-app-menu', 
    loadChildren: () => import('./components/ids-app-menu/ids-app-menu.module').then(m => m.IdsAppMenuModule),
    data: {
      title: 'IDS App Menu',
      category: 'Navigation and Interaction',
      description: 'Upload multiple files'
    },
  },
  { 
    path: 'ids-badge', 
    loadChildren: () => import('./components/ids-badge/ids-badge.module').then(m => m.IdsBadgeModule),
    data: {
      title: 'IDS Badge',
      category: 'Navigation and Interaction',
      description: 'Upload multiple files'
    },
  },
  { 
    path: 'ids-breadcrumb',
    loadChildren: () => import('./components/ids-breadcrumb/ids-breadcrumb.module').then(m => m.IdsBreadcrumbModule),
    data: {
      title: 'IDS Breadcrumb',
      category: 'Navigation and Interaction',
      description: 'Upload multiple files'
    },
  },
  { 
    path: 'ids-button',
    loadChildren: () => import('./components/ids-button/ids-button.module').then(m => m.IdsButtonModule),
    data: {
      title: 'IDS Button',
      category: 'Navigation and Interaction',
      description: 'Upload multiple files'
    },
  },
  { 
    path: 'ids-loading-indicator', 
    loadChildren: () => import('./components/ids-loading-indicator/ids-loading-indicator.module').then(m => m.IdsLoadingIndicatorModule),
    data: {
      title: 'IDS Loading Indicator',
      category: 'Navigation and Interaction',
      description: 'Upload multiple files'
    },
  },
  { 
    path: 'ids-menu',
    loadChildren: () => import('./components/ids-menu/ids-menu.module').then(m => m.IdsMenuModule),
    data: {
      title: 'IDS Menu',
      category: 'Navigation and Interaction',
      description: 'Upload multiple files'
    },
  },
  {
    path: 'ids-menu-button',
    loadChildren: () => import('./components/ids-menu-button/ids-menu-button.module').then(m => m.IdsMenuButtonModule),
    data: {
      title: 'IDS Menu Button',
      category: 'Navigation and Interaction',
      description: 'Upload multiple files'
    },
  },
  { 
    path: 'ids-modal',
    loadChildren: () => import('./components/ids-modal/ids-modal.module').then(m => m.IdsModalModule),
    data: {
      title: 'IDS Modal',
      category: 'Navigation and Interaction',
      description: 'Upload multiple files'
    },
  },
  { 
    path: 'ids-pager',
    loadChildren: () => import('./components/ids-pager/ids-pager.module').then(m => m.IdsPagerModule),
    data: {
      title: 'IDS Pager',
      category: 'Navigation and Interaction',
      description: 'Upload multiple files'
    },
  },
  { 
    path: 'ids-popup-menu',
    loadChildren: () => import('./components/ids-popup-menu/ids-popup-menu.module').then(m => m.IdsPopupMenuModule),
    data: {
      title: 'IDS Popup Menu',
      category: 'Navigation and Interaction',
      description: 'Upload multiple files'
    },
  },
  { 
    path: 'ids-scroll-view',
    loadChildren: () => import('./components/ids-scroll-view/ids-scroll-view.module').then(m => m.IdsScrollViewModule),
    data: {
      title: 'IDS Scroll View',
      category: 'Navigation and Interaction',
      description: 'Upload multiple files'
    },
  },
  { 
    path: 'ids-skip-link',
    loadChildren: () => import('./components/ids-skip-link/ids-skip-link.module').then(m => m.IdsSkipLinkModule),
    data: {
      title: 'IDS Skip Link',
      category: 'Navigation and Interaction',
      description: 'Upload multiple files'
    },
  },
  { 
    path: 'ids-tabs', 
    loadChildren: () => import('./components/ids-tabs/ids-tabs.module').then(m => m.IdsTabModule),
    data: {
      title: 'IDS Tabs',
      category: 'Navigation and Interaction',
      description: 'Upload multiple files'
    },
  },
  { 
    path: 'ids-theme-switcher', 
    loadChildren: () => import('./components/ids-theme-switcher/ids-theme-switcher.module').then(m => m.IdsThemeSwitcherModule),
    data: {
      title: 'IDS Theme Switcher',
      category: 'Navigation and Interaction',
      description: 'Upload multiple files'
    },
  },
  { 
    path: 'ids-toggle-button',
    loadChildren: () => import('./components/ids-toggle-button/ids-toggle-button.module').then(m => m.IdsToggleButtonModule),
    data: {
      title: 'IDS Toggle Button',
      category: 'Navigation and Interaction',
      description: 'Upload multiple files'
    },
  },
  { 
    path: 'ids-tree',
    loadChildren: () => import('./components/ids-tree/ids-tree.module').then(m => m.IdsTreeModule),
    data: {
      title: 'IDS Tree',
      category: 'Navigation and Interaction',
      description: 'Upload multiple files'
    },
  },
  { 
    path: 'ids-virtual-scroll',
    loadChildren: () => import('./components/ids-virtual-scroll/ids-virtual-scroll.module').then(m => m.IdsVirtualScrollModule),
    data: {
      title: 'IDS Virtual Scroll',
      category: 'Navigation and Interaction',
      description: 'Upload multiple files'
    },
  },
  { 
    path: 'ids-wizard',
    loadChildren: () => import('./components/ids-wizard/ids-wizard.module').then(m => m.IdsWizardModule),
    data: {
      title: 'IDS Wizard',
      category: 'Navigation and Interaction',
      description: 'Upload multiple files'
    },
  },
  { 
    path: 'ids-about',
    loadChildren: () => import('./components/ids-about/ids-about.module').then(m => m.IdsAboutModule),
    data: {
      title: 'IDS About',
      category: 'Messages and Alerts',
      description: 'Upload multiple files'
    },
  },
  { 
    path: 'ids-empty-message',
    loadChildren: () => import('./components/ids-empty-message/ids-empty-message.module').then(m => m.IdsEmptyMessageModule),
    data: {
      title: 'IDS Empty Message',
      category: 'Messages and Alerts',
      description: 'Upload multiple files'
    },
  },
  { 
    path: 'ids-error-page',
    loadChildren: () => import('./components/ids-error-page/ids-error-page.module').then(m => m.IdsErrorPageModule),
    data: {
      title: 'IDS Error Page',
      category: 'Messages and Alerts',
      description: 'Upload multiple files'
    },
  },
  { 
    path: 'ids-icon',
    loadChildren: () => import('./components/ids-icon/ids-icon.module').then(m => m.IdsIconModule),
    data: {
      title: 'IDS Icon',
      category: 'Messages and Alerts',
      description: 'Upload multiple files'
    },
  },
  { 
    path: 'ids-message', 
    loadChildren: () => import('./components/ids-message/ids-message.module').then(m => m.IdsMessageModule),
    data: {
      title: 'IDS Message',
      category: 'Messages and Alerts',
      description: 'Upload multiple files'
    },
  },
  { 
    path: 'ids-notification-banner',
    loadChildren: () => import('./components/ids-notification-banner/ids-notification-banner.module').then(m => m.IdsNotificationBannerModule),
    data: {
      title: 'IDS Notification Banner',
      category: 'Messages and Alerts',
      description: 'Upload multiple files'
    },
  },
  { 
    path: 'ids-progress-bar',
    loadChildren: () => import('./components/ids-progress-bar/ids-progress-bar.module').then(m => m.IdsProgressBarModule),
    data: {
      title: 'IDS Progress Bar',
      category: 'Messages and Alerts',
      description: 'Upload multiple files'
    },
  },
  { 
    path: 'ids-toast',
    loadChildren: () => import('./components/ids-toast/ids-toast.module').then(m => m.IdsToastModule),
    data: {
      title: 'IDS Toast',
      category: 'Messages and Alerts',
      description: 'Upload multiple files'
    },
  },
  { 
    path: 'ids-list-builder', 
    loadChildren: () => import('./components/ids-list-builder/ids-list-builder.module').then(m => m.IdsListBuilderModule),
    data: {
      title: 'IDS List Builder',
      category: 'Lists',
      description: 'Upload multiple files'
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    scrollOffset: [0, 145],
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }