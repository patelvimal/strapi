import { Context } from 'koa';

export async function ts(ctx: Context) {
  ctx.set({ 'Content-Type': 'text/html' });
  return 'Hello World!';
}