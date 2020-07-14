import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Map } from 'ol';
import { Observable } from 'rxjs';
import { Link } from '../shared/classes/link.class';
import { MapLayer } from '../shared/classes/maplayer';
import { LegendItem } from '../shared/interfaces/config-layers.inteface';
import { ArcFeature, HomeCard, SearchItem } from '../shared/models';
import * as StoreActions from '../store/store.actions';
import * as fromStore from '../store/store.reducers';
import * as homePanelActions from './home-panels/home-panels.actions';
import * as fromHomePanel from './home-panels/home-panels.reducers';
import * as i18nActions from './i18n/i18n.actions';
import * as fromI18n from './i18n/i18n.reducers';
import * as ImageIndexActions from './image-index/image-index.actions';
import * as fromImageIndex from './image-index/image-index.reducers';
import * as LayersActions from './layers/layers.actions';
import * as fromLayers from './layers/layers.reducers';
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
    imageIndexState$: Observable<fromImageIndex.State>;
    layersState$: Observable<fromLayers.State>;
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
        this.imageIndexState$ = this.store.select(state => state.imageIndex);
        this.layersState$ = this.store.select(state => state.layers);
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
        this.store.dispatch(new StoreActions.ClearState());
    }
    // i18n language
    setLanguage(language: string): void {
      this.store.dispatch(new i18nActions.SetLanguage(language));
    }
    // homepanels state
    setHomePanelOpen(open: boolean): void {
      this.store.dispatch(new homePanelActions.SetOpen(open));
    }
    setHomePanelMulti(multi: boolean): void {
      this.store.dispatch(new homePanelActions.SetMulti(multi));
    }
    setHomePanelToggle(toggle: boolean): void {
      this.store.dispatch(new homePanelActions.SetToggle(toggle));
    }
    // Routes Array State
    setRoutesArray(routes: Array<Link>): void {
        this.store.dispatch(new RoutesArrayActions.SetRouteArray(routes));
    }
    // Image Index State
    setImageIndex(index: number): void {
        this.store.dispatch(new ImageIndexActions.SetImageIndex(index));
    }
    resetImageIndex(): void {
        this.store.dispatch(new ImageIndexActions.ResetImageIndex(0));
    }
    /*
    * Layers state functions
    */
    setGeoLayer(layer: Array<MapLayer>): void {
        this.store.dispatch(new LayersActions.SetGeoLayer(layer));
    }
    setParcelLayers(layers: Array<MapLayer>): void {
        this.store.dispatch(new LayersActions.SetParcelLayers(layers));
    }
    setOverlayLayers(layers: Array<MapLayer>): void {
        this.store.dispatch(new LayersActions.SetOverlayLayers(layers));
    }
    setLegend(legend: Array<LegendItem>): void {
        this.store.dispatch(new LayersActions.SetLegend(legend));
    }
    /*
    * Map state functions
    */
    setMap(map: Map): void {
    this.store.dispatch(new MapActions.SetMap(map));
    }
    /*
    * Map Pane state functions
    */
    toggleMapPane(): void {
    this.store.dispatch(new MapPaneActions.Toggle());
    }
    setMapPaneOpened(opened: boolean): void {
        this.store.dispatch(new MapPaneActions.SetOpened(opened));
    }
    setMapPaneTitle(title: string): void {
        this.store.dispatch(new MapPaneActions.SetTitle(title));
    }
    setMapPaneSelectedModule(selectedModule: number): void {
        this.store.dispatch(new MapPaneActions.SetSelectedModule(selectedModule));
    }
    // Page State
    setBoardCPB(boardmembers: Array<HomeCard>): void {
        this.store.dispatch(new PageStateActions.SetBoardCPB(boardmembers));
    }
    setBoardEC(boardmembers: Array<HomeCard>): void {
        this.store.dispatch(new PageStateActions.SetBoardEC(boardmembers));
    }
    setBoardLHPC(boardmembers: Array<HomeCard>): void {
        this.store.dispatch(new PageStateActions.SetBoardLHPC(boardmembers));
    }
    setBoardZBA(boardmembers: Array<HomeCard>): void {
        this.store.dispatch(new PageStateActions.SetBoardZBA(boardmembers));
    }
    /*
    * Prop Pane state functions
    */
    togglePropPane(): void {
        this.store.dispatch(new PropPaneActions.Toggle());
    }
    setPropPaneOpened(opened: boolean): void {
        this.store.dispatch(new PropPaneActions.SetOpened(opened));
    }
    setPropPaneTitle(title: string): void {
        this.store.dispatch(new PropPaneActions.SetTitle(title));
    }
    setPropPanSelectedProp(selectedProp: SearchItem): void {
        this.store.dispatch(new PropPaneActions.SetSelectedProp(selectedProp));
    }
    setPropPanPropInfo(propInfo: ArcFeature): void {
        this.store.dispatch(new PropPaneActions.SetPropInfo(propInfo));
    }
    /*
    * SIDEBAR state functions
    */
    toggleSidebar(): void {
        this.store.dispatch(new SidebarActions.Toggle());
    }
    setHasSidebar(hasSidebar: boolean): void {
        this.store.dispatch(new SidebarActions.SetHasSidebar(hasSidebar));
    }
    setSidebarMode(mode: string): void {
        this.store.dispatch(new SidebarActions.SetMode(mode));
    }
    setSidebarCollapsible(collapsible: boolean): void {
        this.store.dispatch(new SidebarActions.SetCollapsible(collapsible));
    }
    setSidebarOpened(opened: boolean): void {
        this.store.dispatch(new SidebarActions.SetOpened(opened));
    }
    setSidebarTitle(title: string): void {
        this.store.dispatch(new SidebarActions.SetTitle(title));
    }
    setSidebarSelectedModule(module: string): void {
        this.store.dispatch(new SidebarActions.SetSelectedModule(module));
    }
    /*
    * Right SIDEBAR state functions
    */
    toggleRightSidebar(): void {
        this.store.dispatch(new RightSidebarActions.Toggle());
    }
    setHasRightSidebar(hasSidebar: boolean): void {
        this.store.dispatch(new RightSidebarActions.SetHasSidebar(hasSidebar));
    }
    setRightSidebarMode(mode: string): void {
        this.store.dispatch(new RightSidebarActions.SetMode(mode));
    }
    setRightSidebarCollapsible(collapsible: boolean): void {
        this.store.dispatch(new RightSidebarActions.SetCollapsible(collapsible));
    }
    setRightSidebarOpened(opened: boolean): void {
        this.store.dispatch(new RightSidebarActions.SetOpened(opened));
    }
    setRightSidebarTitle(title: string): void {
        this.store.dispatch(new RightSidebarActions.SetTitle(title));
    }
    setRightSidebarSelectedModule(module: string): void {
        this.store.dispatch(new RightSidebarActions.SetSelectedModule(module));
    }
}
