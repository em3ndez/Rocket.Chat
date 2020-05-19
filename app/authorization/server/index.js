import { addUserRoles } from './functions/addUserRoles';
import {
	addRoomAccessValidator,
	canAccessRoom,
	roomAccessValidators,
} from './functions/canAccessRoom';
import { canSendMessage, validateRoomMessagePermissions } from './functions/canSendMessage';
import { getRoles } from './functions/getRoles';
import { getUsersInRole } from './functions/getUsersInRole';
import {
	hasAllPermission,
	hasAtLeastOnePermission,
	hasPermission,
} from './functions/hasPermission';
import { hasRole } from './functions/hasRole';
import { removeUserFromRoles } from './functions/removeUserFromRoles';
import { AuthorizationUtils } from '../lib/AuthorizationUtils';
import './methods/addPermissionToRole';
import './methods/addUserToRole';
import './methods/deleteRole';
import './methods/removeRoleFromPermission';
import './methods/removeUserFromRole';
import './methods/saveRole';
import './streamer/permissions';
import './startup';

export {
	getRoles,
	getUsersInRole,
	hasRole,
	removeUserFromRoles,
	canSendMessage,
	validateRoomMessagePermissions,
	addRoomAccessValidator,
	roomAccessValidators,
	addUserRoles,
	canAccessRoom,
	hasAllPermission,
	hasAtLeastOnePermission,
	hasPermission,
	AuthorizationUtils,
};
