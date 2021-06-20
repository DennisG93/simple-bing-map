export const createNewPushPin = ({longitude, latitude}) => {
    return {
      location: [Number(latitude), Number(longitude)],
      option: { color: "red" },
    }
  }
