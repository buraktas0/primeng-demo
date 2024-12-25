import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LayoutService {
    private _isCollapsed = new BehaviorSubject<boolean>(
        this.getSidebarState()
    );
    sidebarCollapsed$ = this._isCollapsed.asObservable();

    toggleSidebar() {
        const newState = !this._isCollapsed.value;
        this._isCollapsed.next(newState);
        this.saveSidebarState(newState);
    }

    getSidebarState(): boolean {
        const savedState = sessionStorage.getItem('sidebarState');
        return savedState === 'true';
    }

    saveSidebarState(state: boolean) {
        sessionStorage.setItem('sidebarState', state.toString());
    }

}