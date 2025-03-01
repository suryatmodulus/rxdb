import type { FilledMangoQuery, RxDocumentData, RxJsonSchema, RxQueryPlan, RxQueryPlanerOpts } from './types';
export declare const INDEX_MAX: string;
export declare const INDEX_MIN: number;
/**
 * Returns the query plan which contains
 * information about how to run the query
 * and which indexes to use.
 *
 * This is used in some storage like Memory, dexie.js and IndexedDB.
 */
export declare function getQueryPlan<RxDocType>(schema: RxJsonSchema<RxDocumentData<RxDocType>>, query: FilledMangoQuery<RxDocType>): RxQueryPlan;
export declare function isLogicalOperator(operator: string): boolean;
export declare function getMatcherQueryOpts(operator: string, operatorValue: any): Partial<RxQueryPlanerOpts>;
/**
 * Returns a number that determines the quality of the query plan.
 * Higher number means better query plan.
 */
export declare function rateQueryPlan<RxDocType>(schema: RxJsonSchema<RxDocumentData<RxDocType>>, query: FilledMangoQuery<RxDocType>, queryPlan: RxQueryPlan): number;
