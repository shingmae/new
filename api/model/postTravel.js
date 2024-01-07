const mongoose = require('mongoose');

const PostTravelSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
      unique: true,
    },
    multi: [
      {
        photo: [
          {
            photoSub: {
              type: String,
              require: false,
            },
          },
        ],

        desc: [
          {
            descSub: {
              type: String,
              require: true,
            },
          },
        ],

        video: [
          {
            videoSub: { type: String, require: false },
          },
        ],
      },
    ],
    place: [
      {
        title: {
          type: String,
          require: true,
        },
        desc: {
          type: String,
          require: true,
        },
        photo: {
          type: String,
          require: true,
        },
        verdict: {
          type: String,
        },
        pros: {
          type: String,
          require: true,
        },
        cons: {
          type: String,
          require: true,
        },
        tips: {
          type: String,
        },
      },
    ],
    finalVerdict: [
      {
        icon: {
          type: String,
          require: true,
        },
      },
    ],
    finalSay: {
      type: Array,
      require: false,
    },
    finalPoints: {
      type: Number,
      require: false,
    },
    contact: [
      {
        map: {
          type: Array,
          require: false,
        },
        taxi: {
          type: Array,
          require: false,
        },
        local: {
          type: Array,
          require: false,
        },
        boat: {
          type: Array,
          require: false,
        },
        officeHours: {
          type: Array,
          require: false,
        },
        landline: {
          type: Array,
          require: false,
        },
        mobile: {
          type: Array,
          require: false,
        },
        email: {
          type: String,
          require: false,
        },
        facebook: {
          type: Array,
          require: false,
        },
      },
    ],
    categories: {
      type: Array,
      require: false,
    },
  },
  {
    timestamps: true,
  }
);

const PostTravel = mongoose.model('PostTravel', PostTravelSchema);

module.exports = PostTravel;
