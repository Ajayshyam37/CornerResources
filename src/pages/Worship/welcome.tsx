import MUIDrawerLeft from "../../components/LeftNavigation";

const pages = ['Band', 'PlanningCenter', 'MultiTracks'];

export function BandWelcome(){
    return(
        <MUIDrawerLeft tabs={pages} title="Worship Team"/>
    );
}