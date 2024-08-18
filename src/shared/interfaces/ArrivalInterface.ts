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
    livreiImageId: LivreiImageId | null;
    livreiInvertImageId: string | null;
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

export interface ArrivalInfo {
    i_id: string;
    id: string;
    ad: string;
    co: Co;
    flt: string;
    dat: string;
    mar1_id: string;
    mar1_at: string | null;
    mar1_dt: string | null;
    fplTime: string | null;
    marArrivalEt: string | null;
    mar2_id: string;
    mar2_at: string | null;
    mar2_dt: string | null;
    mar3_id: string | null;
    mar3_at: string | null;
    mar3_dt: string | null;
    mar4_id: string | null;
    mar4_at: string | null;
    mar4_dt: string | null;
    mar5_id: string | null;
    mar5_at: string | null;
    mar5_dt: string | null;
    t_at: string | null;
    term: string;
    old_term: string;
    t_st: string;
    t_et: string;
    chin_id: string | null;
    t_chin_start: string | null;
    t_chin_finish: string | null;
    gate_id: string;
    old_gate_id: string;
    t_boarding_start: string | null;
    t_bording_finish: string | null;
    bbel_id: string;
    old_bbel_id: string;
    bbel_start: string | null;
    bbel_finish: string | null;
    vip_status_eng: string;
    vip_status_rus: string;
    vip_status_chn: string;
    pcc: string;
    main_flight: string;
    status_code: string;
    status_id: string;
    aircraft_type_id: string;
    estimated_chin_start: string | null;
    estimated_chin_finish: string | null;
    estimated_bag_start: string;
    t_st_mar: string;
    t_at_mar: string;
    way_time: string;
    t_otpr: string | null;
    t_prb: string | null;
    term_gate: string;
    old_term_gate: string;
    vip_status: string;
    mar1: Mar;
    mar2: Mar;
    mar3: Mar | null;
    mar4: Mar | null;
    mar5: Mar | null;
    aircraft_type_name: string;
}

export interface axiosRequest{
    items: ArrivalInfo[];
    pagination: paginationInterface
}