import {createNavigationContainerRef} from '@react-navigation/native';
import {DashboardParamList} from '@newme/dashboard-sdk';
import {TopPicksParamList} from '@newme/toppicks-sdk';
import {WishlistParamList} from '@newme/wishlist-sdk';
import {OffersParamList} from '@newme/offers-sdk';
import {ShopParamList} from '@newme/shop-sdk';
import {NavigatorScreenParams} from '@react-navigation/native';

export type RootStackParamList = {
    Home:NavigatorScreenParams<DashboardParamList>;
    TopPicks:NavigatorScreenParams<TopPicksParamList>;
    Wishlist:NavigatorScreenParams<WishlistParamList>;
    Offers:NavigatorScreenParams<OffersParamList>;
    Shopping:NavigatorScreenParams<ShopParamList>;
}

export const navigationRef = createNavigationContainerRef<RootStackParamList>();