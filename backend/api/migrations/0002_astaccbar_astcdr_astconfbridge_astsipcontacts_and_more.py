# Generated by Django 4.2.8 on 2023-12-12 10:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='AstAccbar',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=10, unique=True)),
                ('context', models.CharField(blank=True, max_length=40, null=True)),
                ('secret', models.CharField(blank=True, max_length=40, null=True)),
            ],
            options={
                'db_table': 'ast_accbar',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='AstCdr',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('start', models.DateTimeField()),
                ('answer', models.DateTimeField()),
                ('end', models.DateTimeField()),
                ('clid', models.CharField(max_length=80)),
                ('src', models.CharField(max_length=80)),
                ('dst', models.CharField(max_length=80)),
                ('dcontext', models.CharField(max_length=80)),
                ('channel', models.CharField(max_length=80)),
                ('dstchannel', models.CharField(max_length=80)),
                ('lastapp', models.CharField(max_length=80)),
                ('lastdata', models.CharField(max_length=80)),
                ('duration', models.IntegerField()),
                ('billsec', models.IntegerField()),
                ('disposition', models.CharField(max_length=45)),
                ('amaflags', models.IntegerField()),
                ('accountcode', models.CharField(max_length=20)),
                ('uniqueid', models.CharField(max_length=32)),
                ('userfield', models.CharField(max_length=255)),
                ('peeraccount', models.CharField(max_length=20)),
                ('linkedid', models.CharField(max_length=32)),
                ('sequence', models.IntegerField()),
                ('route_rate', models.CharField(max_length=10)),
            ],
            options={
                'db_table': 'ast_cdr',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='AstConfbridge',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('confname', models.CharField(max_length=40, unique=True)),
                ('name', models.CharField(blank=True, max_length=40, null=True)),
                ('secret', models.CharField(blank=True, max_length=40, null=True)),
                ('extension', models.IntegerField(blank=True, null=True)),
            ],
            options={
                'db_table': 'ast_ConfBridge',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='AstSipcontacts',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=10, unique=True)),
                ('useragent', models.CharField(blank=True, max_length=20, null=True)),
                ('lastms', models.IntegerField(blank=True, null=True)),
                ('ipaddr', models.CharField(blank=True, max_length=45, null=True)),
                ('port', models.IntegerField(blank=True, null=True)),
                ('regseconds', models.IntegerField(blank=True, null=True)),
                ('defaultuser', models.CharField(blank=True, max_length=10, null=True)),
                ('fullcontact', models.CharField(blank=True, max_length=35, null=True)),
                ('regserver', models.CharField(blank=True, max_length=20, null=True)),
            ],
            options={
                'db_table': 'ast_sipcontacts',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='AstSipfriends',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=10, unique=True)),
                ('ipaddr', models.CharField(blank=True, max_length=45, null=True)),
                ('port', models.IntegerField(blank=True, null=True)),
                ('regseconds', models.IntegerField(blank=True, null=True)),
                ('defaultuser', models.CharField(blank=True, max_length=10, null=True)),
                ('fullcontact', models.CharField(blank=True, max_length=80, null=True)),
                ('regserver', models.CharField(blank=True, max_length=20, null=True)),
                ('useragent', models.CharField(blank=True, max_length=20, null=True)),
                ('lastms', models.IntegerField(blank=True, null=True)),
                ('host', models.CharField(blank=True, max_length=40, null=True)),
                ('type', models.CharField(blank=True, max_length=6, null=True)),
                ('context', models.CharField(blank=True, max_length=40, null=True)),
                ('permit', models.CharField(blank=True, max_length=95, null=True)),
                ('deny', models.CharField(blank=True, max_length=95, null=True)),
                ('secret', models.CharField(blank=True, max_length=40, null=True)),
                ('md5secret', models.CharField(blank=True, max_length=40, null=True)),
                ('remotesecret', models.CharField(blank=True, max_length=40, null=True)),
                ('transport', models.CharField(blank=True, max_length=7, null=True)),
                ('dtmfmode', models.CharField(blank=True, max_length=9, null=True)),
                ('directmedia', models.CharField(blank=True, max_length=6, null=True)),
                ('nat', models.CharField(blank=True, max_length=29, null=True)),
                ('callgroup', models.CharField(blank=True, max_length=40, null=True)),
                ('pickupgroup', models.CharField(blank=True, max_length=40, null=True)),
                ('language', models.CharField(blank=True, max_length=40, null=True)),
                ('disallow', models.CharField(blank=True, max_length=40, null=True)),
                ('allow', models.CharField(blank=True, max_length=40, null=True)),
                ('insecure', models.CharField(blank=True, max_length=40, null=True)),
                ('trustrpid', models.CharField(blank=True, max_length=3, null=True)),
                ('progressinband', models.CharField(blank=True, max_length=5, null=True)),
                ('promiscredir', models.CharField(blank=True, max_length=3, null=True)),
                ('useclientcode', models.CharField(blank=True, max_length=3, null=True)),
                ('accountcode', models.CharField(blank=True, max_length=40, null=True)),
                ('setvar', models.CharField(blank=True, max_length=40, null=True)),
                ('callerid', models.CharField(blank=True, max_length=40, null=True)),
                ('amaflags', models.CharField(blank=True, max_length=40, null=True)),
                ('callcounter', models.CharField(blank=True, max_length=3, null=True)),
                ('cc_agent_policy', models.CharField(blank=True, max_length=7, null=True)),
                ('cc_monitor_policy', models.CharField(blank=True, max_length=7, null=True)),
                ('busylevel', models.IntegerField(blank=True, null=True)),
                ('allowoverlap', models.CharField(blank=True, max_length=3, null=True)),
                ('allowsubscribe', models.CharField(blank=True, max_length=3, null=True)),
                ('videosupport', models.CharField(blank=True, max_length=3, null=True)),
                ('maxcallbitrate', models.IntegerField(blank=True, null=True)),
                ('rfc2833compensate', models.CharField(blank=True, max_length=3, null=True)),
                ('mailbox', models.CharField(blank=True, max_length=40, null=True)),
                ('session_timers', models.CharField(blank=True, db_column='session-timers', max_length=9, null=True)),
                ('session_expires', models.IntegerField(blank=True, db_column='session-expires', null=True)),
                ('session_minse', models.IntegerField(blank=True, db_column='session-minse', null=True)),
                ('session_refresher', models.CharField(blank=True, db_column='session-refresher', max_length=3, null=True)),
                ('t38pt_usertpsource', models.CharField(blank=True, max_length=40, null=True)),
                ('regexten', models.CharField(blank=True, max_length=40, null=True)),
                ('fromdomain', models.CharField(blank=True, max_length=40, null=True)),
                ('fromuser', models.CharField(blank=True, max_length=40, null=True)),
                ('qualify', models.CharField(blank=True, max_length=40, null=True)),
                ('defaultip', models.CharField(blank=True, max_length=45, null=True)),
                ('rtptimeout', models.IntegerField(blank=True, null=True)),
                ('rtpholdtimeout', models.IntegerField(blank=True, null=True)),
                ('sendrpid', models.CharField(blank=True, max_length=3, null=True)),
                ('outboundproxy', models.CharField(blank=True, max_length=40, null=True)),
                ('callbackextension', models.CharField(blank=True, max_length=40, null=True)),
                ('timert1', models.IntegerField(blank=True, null=True)),
                ('timerb', models.IntegerField(blank=True, null=True)),
                ('qualifyfreq', models.IntegerField(blank=True, null=True)),
                ('constantssrc', models.CharField(blank=True, max_length=3, null=True)),
                ('contactpermit', models.CharField(blank=True, max_length=95, null=True)),
                ('contactdeny', models.CharField(blank=True, max_length=95, null=True)),
                ('usereqphone', models.CharField(blank=True, max_length=3, null=True)),
                ('textsupport', models.CharField(blank=True, max_length=3, null=True)),
                ('faxdetect', models.CharField(blank=True, max_length=3, null=True)),
                ('buggymwi', models.CharField(blank=True, max_length=3, null=True)),
                ('auth', models.CharField(blank=True, max_length=40, null=True)),
                ('fullname', models.CharField(blank=True, max_length=40, null=True)),
                ('trunkname', models.CharField(blank=True, max_length=40, null=True)),
                ('cid_number', models.CharField(blank=True, max_length=40, null=True)),
                ('callingpres', models.CharField(blank=True, max_length=21, null=True)),
                ('mohinterpret', models.CharField(blank=True, max_length=40, null=True)),
                ('mohsuggest', models.CharField(blank=True, max_length=40, null=True)),
                ('parkinglot', models.CharField(blank=True, max_length=40, null=True)),
                ('hasvoicemail', models.CharField(blank=True, max_length=3, null=True)),
                ('subscribemwi', models.CharField(blank=True, max_length=3, null=True)),
                ('vmexten', models.CharField(blank=True, max_length=40, null=True)),
                ('autoframing', models.CharField(blank=True, max_length=3, null=True)),
                ('rtpkeepalive', models.IntegerField(blank=True, null=True)),
                ('call_limit', models.IntegerField(blank=True, db_column='call-limit', null=True)),
                ('g726nonstandard', models.CharField(blank=True, max_length=3, null=True)),
                ('ignoresdpversion', models.CharField(blank=True, max_length=3, null=True)),
                ('allowtransfer', models.CharField(blank=True, max_length=3, null=True)),
                ('dynamic', models.CharField(blank=True, max_length=3, null=True)),
                ('acl', models.CharField(blank=True, max_length=15, null=True)),
            ],
            options={
                'db_table': 'ast_sipfriends',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='AstVoicemailUsers',
            fields=[
                ('uniqueid', models.AutoField(primary_key=True, serialize=False)),
                ('customer_id', models.CharField(max_length=11)),
                ('context', models.CharField(max_length=50)),
                ('mailbox', models.CharField(max_length=11)),
                ('password', models.CharField(max_length=10)),
                ('fullname', models.CharField(max_length=150)),
                ('email', models.CharField(max_length=50)),
                ('pager', models.CharField(max_length=50)),
                ('tz', models.CharField(max_length=10)),
                ('attach', models.CharField(max_length=4)),
                ('saycid', models.CharField(max_length=4)),
                ('dialout', models.CharField(max_length=10)),
                ('callback', models.CharField(max_length=10)),
                ('review', models.CharField(max_length=4)),
                ('operator', models.CharField(max_length=4)),
                ('envelope', models.CharField(max_length=4)),
                ('sayduration', models.CharField(max_length=4)),
                ('saydurationm', models.IntegerField()),
                ('sendvoicemail', models.CharField(max_length=4)),
                ('delete', models.CharField(max_length=4)),
                ('nextaftercmd', models.CharField(max_length=4)),
                ('forcename', models.CharField(max_length=4)),
                ('forcegreetings', models.CharField(max_length=4)),
                ('hidefromdir', models.CharField(max_length=4)),
                ('stamp', models.DateTimeField()),
            ],
            options={
                'db_table': 'ast_voicemail_users',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='VoicemailUsers',
            fields=[
                ('uniqueid', models.AutoField(primary_key=True, serialize=False)),
                ('customer_id', models.CharField(max_length=11)),
                ('context', models.CharField(max_length=50)),
                ('mailbox', models.CharField(max_length=11)),
                ('password', models.CharField(max_length=10)),
                ('fullname', models.CharField(max_length=150)),
                ('email', models.CharField(max_length=50)),
                ('pager', models.CharField(max_length=50)),
                ('tz', models.CharField(max_length=10)),
                ('attach', models.CharField(max_length=4)),
                ('saycid', models.CharField(max_length=4)),
                ('dialout', models.CharField(max_length=10)),
                ('callback', models.CharField(max_length=10)),
                ('review', models.CharField(max_length=4)),
                ('operator', models.CharField(max_length=4)),
                ('envelope', models.CharField(max_length=4)),
                ('sayduration', models.CharField(max_length=4)),
                ('saydurationm', models.IntegerField()),
                ('sendvoicemail', models.CharField(max_length=4)),
                ('delete', models.CharField(max_length=4)),
                ('nextaftercmd', models.CharField(max_length=4)),
                ('forcename', models.CharField(max_length=4)),
                ('forcegreetings', models.CharField(max_length=4)),
                ('hidefromdir', models.CharField(max_length=4)),
                ('stamp', models.DateTimeField()),
            ],
            options={
                'db_table': 'voicemail_users',
                'managed': False,
            },
        ),
    ]
