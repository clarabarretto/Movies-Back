const UserAcessLog = require('../models/UserAcessLog').default;

class UserAcessLogsService {
  async checkAccessVerification(id) {

    try {
      const accessLogs = await UserAcessLog.findAll({
        where:{
          user_id: id
        },
        raw: true,
        attributes: ['status'],
        limit: 2
      });

      return accessLogs.length === 2 && accessLogs.every((log) => log.status === 'FAIL');
    } catch (err) {

      throw new Error(err);
    }
  }
}

export default new UserAcessLogsService();
