import type { LocalDocumentParent, LocalDocumentState, RxDocumentData, RxJsonSchema, RxLocalDocumentData, RxStorage } from '../../types';
export declare function createLocalDocStateByParent(parent: LocalDocumentParent): void;
export declare function getLocalDocStateByParent(parent: LocalDocumentParent): Promise<LocalDocumentState>;
export declare function createLocalDocumentStorageInstance(databaseInstanceToken: string, storage: RxStorage<any, any>, databaseName: string, collectionName: string, instanceCreationOptions: any, multiInstance: boolean): Promise<import("../../types").RxStorageInstance<RxLocalDocumentData<{
    [key: string]: any;
}>, any, any, any>>;
export declare function closeStateByParent(parent: LocalDocumentParent): Promise<void> | undefined;
export declare function removeLocalDocumentsStorageInstance(storage: RxStorage<any, any>, databaseName: string, collectionName: string): Promise<void>;
export declare function getCollectionLocalInstanceName(collectionName: string): string;
export declare const RX_LOCAL_DOCUMENT_SCHEMA: RxJsonSchema<RxDocumentData<RxLocalDocumentData>>;
