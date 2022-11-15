import {MacStatus} from "./macStatus";

export type MacDetails = {
    id: number;
    label: string;
    ip: string;
    report_status: boolean;

    serial_number: string;
    storage_capacity: number;
    memory: number;
    cpu_cores: number;

    macos_version: string;
    macos_build_version: string;

    mac_user: string;
    status: MacStatus;
    last_seen: string;
}
