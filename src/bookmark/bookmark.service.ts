import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class BookmarkService {
  constructor(private prismaService: PrismaService) {}

  async getBookmarks() {
    return this.prismaService.bookmark.findUnique({
      where: {
        id: bookmarkId,
      },
    });
  }
}
