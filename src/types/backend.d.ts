
export { };

declare global {
    interface IBackendRes<T> {
        error?: string | string[];
        message: string;
        statusCode: number | string;
        data?: T;
    }

    interface IRequest {
        url: string;
        method: string;
        body?: { [key: string]: any };
        queryParams?: any;
        useCredentials?: boolean;
        headers?: any;
        nextOption?: any;
    }

    interface ICandleStick {
        openTime: number;
        open: number;
        high: number;
        low: number;
        close: number;
        volume: number;
        closeTime: number;
        baseAssetVolume: number;
        numberOfTrades: number;
        takerBuyVolume: number;
        takerBuyBaseAssetVolume: number;
        ignore: number;
    };

    interface IDataCandleStick {
        open: number;
        high: number;
        low: number;
        close: number;
        time: number;
    }



}