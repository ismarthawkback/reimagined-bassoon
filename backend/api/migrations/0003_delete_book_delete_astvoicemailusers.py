# Generated by Django 4.2.8 on 2023-12-29 03:44

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_astaccbar_astcdr_astconfbridge_astsipcontacts_and_more'),
    ]

    operations = [
        migrations.DeleteModel(
            name='Book',
        ),
        migrations.DeleteModel(
            name='AstVoicemailUsers',
        ),
    ]