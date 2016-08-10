//**********************************************************************************
//                               SCHEMAS
//**********************************************************************************
import { Mongo } from 'meteor/mongo';
import { Messages } from './collection';
//**********************************************************************************
//                                FRIENDS
//**********************************************************************************
const MessagesSchema = {
	partner: {
		type: Object,
		autoValue() {
			if ( this.isInsert ) {
				return {};
			}
		}
	},

	userId: {
		type: String
	},

};
//**********************************************************************************
//                               ATTACH TO COLLECTION
//**********************************************************************************
Messages.attachSchema( MessagesSchema );