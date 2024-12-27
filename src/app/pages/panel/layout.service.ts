import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LayoutService {

    constructor(breakpointObserver: BreakpointObserver) {
        breakpointObserver.observe([
            Breakpoints.Handset
        ]).subscribe(result => {
            const isMobile = result.matches;
            this.setSidebarState(isMobile);
        });
    }

    private _isCollapsed = new BehaviorSubject<boolean>(
        this.getSidebarState()
    );
    sidebarCollapsed$ = this._isCollapsed.asObservable();

    toggleSidebar(state?: boolean) {
        const newState = !this._isCollapsed.value;
        this._isCollapsed.next(newState);
        this.saveSidebarState(newState);
    }

    setSidebarState(state: boolean) {
        this._isCollapsed.next(state);
        this.saveSidebarState(state);
    }

    getSidebarState(): boolean {
        const savedState = sessionStorage.getItem('sidebarState');
        return savedState === 'true';
    }

    saveSidebarState(state: boolean) {
        sessionStorage.setItem('sidebarState', state.toString());
    }

}