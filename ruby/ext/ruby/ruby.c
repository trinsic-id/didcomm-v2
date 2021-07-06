#include "ruby.h"

VALUE rb_mRuby;

void
Init_ruby(void)
{
  rb_mRuby = rb_define_module("Ruby");
}
