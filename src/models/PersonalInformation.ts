import ChildlInformation from "./ChildlInformation";

export default class PersonalInformation {
    constructor(
        public firstName?: string, public lastName?: string, public tz?: string, public dateOfBirth?: Date, public selectSex?: string,public hmo?:string,public children:ChildlInformation[]=[]
    ) { }
}