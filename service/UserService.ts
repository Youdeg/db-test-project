import { PrismaClient } from "@prisma/client";
import IUser from "../models/IUser";
const prisma = new PrismaClient();

class UserService {
  constructor() {}

  async saveUser(user: IUser) {
    const userName = await prisma.userName.create({
      data: user.name,
    });

    const street = await prisma.street.create({
      data: user.location.street,
    });

    const timezone = await prisma.timezone.create({
      data: user.location.timezone,
    });

    const coordinates = await prisma.coordinates.create({
      data: user.location.coordinates,
    });

    const location = await prisma.location.create({
      data: {
        city: user.location.city,
        state: user.location.state,
        country: user.location.country,
        postcode: user.location.postcode,
        streetId: street.id,
        timezoneId: timezone.id,
        coordinatesId: coordinates.id,
      },
    });

    const login = await prisma.login.create({
      data: user.login,
    });

    const dob = await prisma.dob.create({
      data: user.dob,
    });

    const registered = await prisma.registered.create({
      data: user.registered,
    });

    const id = await prisma.id.create({
      data: user.id,
    });

    const picture = await prisma.picture.create({
      data: user.picture,
    });

    const newUser = await prisma.user.create({
      data: {
        userNameId: userName.id,
        locationId: location.id,
        loginId: login.id,
        dobId: dob.id,
        registeredId: registered.id,
        idId: id.id,
        pictureId: picture.id,
        gender: user.gender,
        email: user.email,
        phone: user.phone,
        cell: user.cell,
        nat: user.nat,
      },
    });

    return newUser;
  }
}

export default new UserService();
