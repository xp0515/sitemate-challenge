import { createFeature, createReducer, on } from "@ngrx/store";
import { IssuesActions } from "./issues.action";
import { Issue } from "../model";

interface State {
    issues: Issue[];
}

const initialState: State = {
    issues: [],
};

export const issuesFeature = createFeature({
    name: 'issues',
    reducer: createReducer(
        initialState,
        on(IssuesActions.get, (state) => {
            return state
        }),
        on(IssuesActions.delete, (state) => {
            return state
        }),
    ),
});

export const {
    name,
    reducer,
    selectIssues,
} = issuesFeature;