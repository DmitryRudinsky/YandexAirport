import {DepartureInfo} from "@/shared/interfaces/DepartureInterface";

interface LivreiImageId {
    id: number;
    extension: string;
    originalWidth: number;
    originalHeight: number;
}

interface Co {
    name: string;
    code: string;
    onlineBuy: string;
    onlineRegister: string;
    livreiImageId: LivreiImageId;
    livreiInvertImageId: null | unknown;
}

interface Mar {
    id: string;
    iata: string;
    icao: string;
    rus: string;
    description: string;
    description_r: string;
    description_chn: string;
    airport: string;
    airport_rus: string;
    region: string;
    country: string;
    city: string;
    city_eng: string;
    lat: string;
    long: string;
    timezone: string;
}

interface paginationInterface{
    curPage: number;
    pageCount: number;
    totalItems: number;
}

export interface TransferInfo {
    i_id: string;
    id: string;
    ad: string;
    co: Co;
    flt: string;
    dat: string;
    mar1_id: string;
    mar1_at: null | string;
    mar1_dt: null | string;
    fplTime: null | string;
    marArrivalEt: null | string;
    mar2_id: string;
    mar2_at: null | string;
    mar2_dt: null | string;
    mar3_id: null | string;
    mar3_at: null | string;
    mar3_dt: null | string;
    mar4_id: null | string;
    mar4_at: null | string;
    mar4_dt: null | string;
    mar5_id: null | string;
    mar5_at: null | string;
    mar5_dt: null | string;
    t_at: null | string;
    term: string;
    old_term: string;
    t_st: string;
    t_et: null | string;
    chin_id: string;
    t_chin_start: null | string;
    t_chin_finish: null | string;
    gate_id: string;
    old_gate_id: string;
    t_boarding_start: null | string;
    t_bording_finish: null | string;
    bbel_id: string;
    old_bbel_id: string;
    bbel_start: null | string;
    bbel_finish: null | string;
    vip_status_eng: string;
    vip_status_rus: string;
    vip_status_chn: string;
    pcc: string;
    main_flight: string;
    status_code: string;
    status_id: string;
    aircraft_type_id: string;
    estimated_chin_start: null | string;
    estimated_chin_finish: null | string;
    estimated_bag_start: null | string;
    t_st_mar: string;
    t_at_mar: null | string;
    way_time: string;
    t_otpr: null | string;
    t_prb: null | string;
    term_gate: string;
    old_term_gate: string;
    vip_status: string;
    mar1: Mar;
    mar2: Mar;
    mar3: null | Mar;
    mar4: null | Mar;
    mar5: null | Mar;
    aircraft_type_name: string;
}


export interface axiosRequest{
    items: DepartureInfo[];
    pagination: paginationInterface
}