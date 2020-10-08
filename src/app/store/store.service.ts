import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Map } from 'ol';
import { Observable } from 'rxjs';
import { Link } from '../shared/classes/link.class';
import { MapLayer } from '../shared/classes/maplayer';
import { FooterList, HomeCard, Page, ParcelFields, SearchItem } from '../shared/models';
import { LegendItem } from '../shared/models/layers.interface';
import * as fromStore from '../store/store.reducers';
import * as homePanelActions from './home-panels/home-panels.actions';
import * as fromHomePanel from './home-panels/home-panels.reducers';
import * as i18nActions from './i18n/i18n.actions';
import * as fromI18n from './i18n/i18n.reducers';
import * as MapPaneActions from './map-pane/map-pane.actions';
import * as fromMapPane from './map-pane/map-pane.reducers';
import * as MapActions from './map/map.actions';
import * as fromMap from './map/map.reducers';
import * as PageStateActions from './page-state/page-state.actions';
import * as fromPageState from './page-state/page-state.reducers';
import * as PropPaneActions from './prop-pane/prop-pane.actions';
import * as fromPropPane from './prop-pane/prop-pane.reducers';
import * as RoutesArrayActions from './routes/routes.actions';
import * as fromRoutesArray from './routes/routes.reducers';
import * as SidebarActions from './sidebar/sidebar.actions';
import * as fromSidebar from './sidebar/sidebar.reducers';
import * as RightSidebarActions from './sidebarRight/sidebar.actions';
import * as fromRightSidebar from './sidebarRight/sidebar.reducers';

@Injectable({
    providedIn: 'root'
})
export class StoreService {
    homePanelsState$: Observable<fromHomePanel.State>;
    i18nState$: Observable<fromI18n.State>;
    mapState$: Observable<fromMap.State>;
    mapPaneState$: Observable<fromMapPane.State>;
    pageState$: Observable<fromPageState.State>;
    propPaneState$: Observable<fromPropPane.State>;
    routesArrayState$: Observable<fromRoutesArray.State>;
    rightSidebarState$: Observable<fromRightSidebar.State>;
    sidebarState$: Observable<fromSidebar.State>;

    constructor(private readonly store: Store<fromStore.StoreState>) {
        this.homePanelsState$ = this.store.select(state => state.homePanel);
        this.i18nState$ = this.store.select(state => state.i18n);
        this.mapState$ = this.store.select(state => state.map);
        this.mapPaneState$ = this.store.select(state => state.mapPane);
        this.pageState$ = this.store.select(state => state.pageState);
        this.propPaneState$ = this.store.select(state => state.propPane);
        this.routesArrayState$ = this.store.select(state => state.routesArray);
        this.sidebarState$ = this.store.select(state => state.sidebar);
        this.rightSidebarState$ = this.store.select(state => state.sidebarRight);
    }
    /**
     * Resets the Store State
     */
    resetStoreState(): void {
        this.store.dispatch(fromStore.clearStateAction());
    }
    // i18n language
    setLanguage(language: string): void {
      this.store.dispatch(i18nActions.setLanguage({payload: language}));
    }
    // homepanels state
    setHomePanelOpen(open: boolean): void {
      this.store.dispatch(homePanelActions.setOpen({ payload: open }));
    }
    setHomePanelMulti(multi: boolean): void {
      this.store.dispatch(homePanelActions.setMulti({ payload: multi }));
    }
    setHomePanelToggle(toggle: boolean): void {
      this.store.dispatch(homePanelActions.setToggle({ payload: toggle }));
    }
    // Routes State
    setCurrentOffice(office: string): void {
        this.store.dispatch(RoutesArrayActions.setCurrentOffice({ payload: office }));
    }
    setRoutesArray(routes: Array<Link>): void {
        this.store.dispatch(RoutesArrayActions.setRouteArray({ payload: routes }));
    }
    /*
    * Map state functions
    */
    setMap(map: Map): void {
        this.store.dispatch(MapActions.setMap({ payload: map }));
    }
    toggleBasemap(): void {
        this.store.dispatch(MapActions.toggleBasemap());
    }
    setGeoLayer(layer: Array<MapLayer>): void {
        this.store.dispatch(MapActions.setGeoLayer({ payload: layer}));
    }
    setParcelLayers(layers: Array<MapLayer>): void {
        this.store.dispatch(MapActions.setParcelLayers({ payload: layers }));
    }
    setOverlayLayers(layers: Array<MapLayer>): void {
        this.store.dispatch(MapActions.setOverlayLayers({ payload: layers}));
    }
    setLegend(legend: Array<LegendItem>): void {
        this.store.dispatch(MapActions.setLegend({ payload: legend}));
    }
    /*
    * Map Pane state functions
    */
    toggleMapPane(): void {
        this.store.dispatch(MapPaneActions.toggle());
    }
    setMapPaneOpened(opened: boolean): void {
        this.store.dispatch(MapPaneActions.setOpened({payload: opened}));
    }
    setMapPaneTitle(title: string): void {
        this.store.dispatch(MapPaneActions.setTitle({payload: title}));
    }
    setMapPaneSelectedModule(selectedModule: number): void {
        this.store.dispatch(MapPaneActions.setSelectedModule({ payload: selectedModule }));
    }
    // Page State
    setPageCurrent(page: Page): void {
        this.store.dispatch(PageStateActions.setPageCurrent({payload: page}));
    }
    setPageBoard(boardPage: Page): void {
        this.store.dispatch(PageStateActions.setPageBoard({payload: boardPage}));
    }
    setBoardCPB(boardmembers: Array<HomeCard>): void {
        this.store.dispatch(PageStateActions.setBoardCPB({payload: boardmembers}));
    }
    setBoardEC(boardmembers: Array<HomeCard>): void {
        this.store.dispatch(PageStateActions.setBoardEC({payload: boardmembers}));
    }
    setBoardLHPC(boardmembers: Array<HomeCard>): void {
        this.store.dispatch(PageStateActions.setBoardLHPC({payload: boardmembers}));
    }
    setBoardZBA(boardmembers: Array<HomeCard>): void {
        this.store.dispatch(PageStateActions.setBoardZBA({payload: boardmembers}));
    }
    setFooter(officeLinks: FooterList): void {
        this.store.dispatch(PageStateActions.setFooter({payload: officeLinks}));
    }
    /*
    * Prop Pane state functions
    */
    togglePropPane(): void {
        this.store.dispatch(PropPaneActions.toggle());
    }
    setPropPaneOpened(opened: boolean): void {
        this.store.dispatch(PropPaneActions.setOpened({ payload: opened }));
    }
    setPropPaneTitle(title: string): void {
        this.store.dispatch(PropPaneActions.setTitle({ payload: title}));
    }
    setPropPaneSelectedProp(selectedProp: SearchItem): void {
        this.store.dispatch(PropPaneActions.setSelectedProp({ payload: selectedProp}));
    }
    setPropPaneSelectedGeo(selectedGeo: any): void {
        this.store.dispatch(PropPaneActions.setSelectedGeo({ payload: selectedGeo}));
    }
    setPropPanePropInfo(propInfo: ParcelFields): void {
        this.store.dispatch(PropPaneActions.setPropInfo({ payload: propInfo}));
    }
    /*
    * SIDEBAR state functions
    */
    toggleSidebar(): void {
        this.store.dispatch(SidebarActions.toggle());
    }
    setHasSidebar(hasSidebar: boolean): void {
        this.store.dispatch(SidebarActions.setHasSidebar({ payload: hasSidebar }));
    }
    setSidebarMode(mode: string): void {
        this.store.dispatch(SidebarActions.setMode({ payload: mode }));
    }
    setSidebarCollapsible(collapsible: boolean): void {
        this.store.dispatch(SidebarActions.setCollapsible({ payload: collapsible }));
    }
    setSidebarOpened(opened: boolean): void {
        this.store.dispatch(SidebarActions.setOpened({ payload: opened }));
    }
    setSidebarTitle(title: string): void {
        this.store.dispatch(SidebarActions.setTitle({ payload: title }));
    }
    setSidebarSelectedModule(module: string): void {
        this.store.dispatch(SidebarActions.setSelectedModule({ payload: module }));
    }
    /*
    * Right SIDEBAR state functions
    */
    toggleRightSidebar(): void {
        this.store.dispatch(RightSidebarActions.toggle());
    }
    setHasRightSidebar(hasSidebar: boolean): void {
        this.store.dispatch(RightSidebarActions.setHasSidebar({ payload: hasSidebar }));
    }
    setRightSidebarMode(mode: string): void {
        this.store.dispatch(RightSidebarActions.setMode({ payload: mode }));
    }
    setRightSidebarCollapsible(collapsible: boolean): void {
        this.store.dispatch(RightSidebarActions.setCollapsible({ payload: collapsible }));
    }
    setRightSidebarOpened(opened: boolean): void {
        this.store.dispatch(RightSidebarActions.setOpened({ payload: opened }));
    }
    setRightSidebarTitle(title: string): void {
        this.store.dispatch(RightSidebarActions.setTitle({ payload: title }));
    }
    setRightSidebarSelectedModule(module: string): void {
        this.store.dispatch(RightSidebarActions.setSelectedModule({ payload: module}));
    }
}
