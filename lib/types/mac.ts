export type Mac = {
    id: number;
    label: string;
    ip: string;
    macos_version: string;
    serial_number: string;
    storage_capacity: number;
    memory: number;
    cpu_cores: number;
    status: 'Available' | 'In Use' | 'Unavailable';
};
