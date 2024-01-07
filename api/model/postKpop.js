const mongoose = require('mongoose');

const PostKpopSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
      unique: true,
    },
    metatag: [
      {
        description: {
          type: String,
          require: false,
        },
        keyword: {
          type: String,
          require: false,
        },
        image: {
          type: String,
          require: false,
        },
        url: {
          type: String,
          require: false,
        },
      },
    ],
    photo: {
      type: String,
      require: false,
    },
    encrypt: {
      type: String,
      require: true,
    },
    license: {
      type: String,
      require: true,
    },
    members: {
      type: String,
      require: true,
    },
    // members: [
    //   {
    //     name: {
    //       type: String,
    //       require: true,
    //     },
    //     id: {
    //       type: String,
    //       require: true,
    //     },
    //   },
    // ],
    desc: {
      type: String,
      require: true,
    },
    username: {
      type: String,
      require: true,
    },
    membersInfo: [
      {
        memberPic: {
          type: String,
          require: false,
        },

        infoMember: [
          {
            stageName: {
              type: String,
            },
            realName: {
              type: String,
            },
            nationality: {
              type: String,
            },
            position: {
              type: String,
            },
            birthday: {
              type: String,
            },
            birthplace: {
              type: String,
            },
            religion: {
              type: String,
            },
            zodiacSign: {
              type: String,
            },
            chineseZodiac: {
              type: String,
            },
            height: {
              type: String,
            },
            weight: {
              type: String,
            },
            blood: {
              type: String,
            },
            siblings: [
              {
                sibling1: {
                  type: String,
                },
              },
            ],
            ideal: [
              {
                ideal1: {
                  type: String,
                },
                ideal2: {
                  type: String,
                },
              },
            ],
            instagram: {
              type: String,
            },
            link: {
              type: String,
            },
          },
        ],
      },
    ],
    facebook: [
      {
        srcFb: {
          type: String,
        },
        nonceFb: {
          type: String,
        },
        dataFb: {
          type: String,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('PostKpop', PostKpopSchema);
